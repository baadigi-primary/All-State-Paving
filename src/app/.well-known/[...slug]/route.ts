import { createHash } from "crypto";
import { BOT, TOOLS, SKILL_MD, WEB_BOT_AUTH_JWK, SITE as S, META } from "@/lib/agent";

// Every /.well-known/* agent discovery doc in one map, built from META in lib/agent.ts.
// ponytail: static JSON, one route. Static files in public/.well-known still win over this catch-all.
const host = new URL(S).hostname.replace(/^www\./, "");
const skill = `${META.slug}-knowledge`;

const serverCard = {
  serverInfo: BOT,
  description: `Public, read-only MCP tools about ${META.name}: ${META.summary} No authentication.`,
  url: `${S}/mcp`,
  endpoint: `${S}/mcp`,
  transport: { type: "streamable-http", endpoint: `${S}/mcp` },
  capabilities: { tools: true, resources: false, prompts: false },
  authentication: { type: "none" },
  tools: TOOLS.map((t) => ({ name: t.name, description: t.description })),
  documentation: `${S}/auth.md`,
};

const oauthAS = {
  issuer: S,
  authorization_endpoint: `${S}/auth.md`,
  token_endpoint: `${S}/api/oauth/token`,
  jwks_uri: `${S}/.well-known/jwks.json`,
  scopes_supported: ["public:read"],
  response_types_supported: ["token"],
  grant_types_supported: ["client_credentials"],
  token_endpoint_auth_methods_supported: ["none"],
  service_documentation: `${S}/auth.md`,
  agent_auth: {
    skill: `${S}/auth.md`,
    register_uri: META.contactUrl,
    identity_types_supported: ["anonymous"],
    anonymous: { credential_types_supported: ["none"], claim_uri: `${S}/api/oauth/token` },
  },
};

const DOCS: Record<string, [body: unknown, type?: string]> = {
  "mcp/server-card.json": [serverCard],
  "mcp.json": [serverCard],
  "api-catalog": [
    {
      linkset: [
        {
          anchor: `${S}/mcp`,
          "service-desc": [{ href: `${S}/.well-known/mcp/server-card.json`, type: "application/json", title: "MCP Server Card" }],
          "service-doc": [{ href: `${S}/auth.md`, type: "text/markdown", title: "Agent auth.md" }],
        },
        {
          anchor: `${S}/ai-bot.md`,
          "service-desc": [{ href: `${S}/.well-known/ai-plugin.json`, type: "application/json", title: `${BOT.name} service descriptor` }],
          "service-doc": [{ href: `${S}/llms.txt`, type: "text/plain", title: "llms.txt entity card" }],
        },
      ],
    },
    "application/linkset+json",
  ],
  "oauth-authorization-server": [oauthAS],
  "openid-configuration": [{ ...oauthAS, subject_types_supported: ["public"], id_token_signing_alg_values_supported: ["none"], claims_supported: ["sub", "iss"] }],
  "oauth-protected-resource": [{
    resource: S,
    authorization_servers: [S],
    scopes_supported: ["public:read"],
    bearer_methods_supported: ["header"],
    resource_documentation: `${S}/auth.md`,
    resource_name: `${META.name} public site, docs, and MCP server`,
  }],
  "agent-skills/index.json": [{
    $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
    skills: [{
      name: skill,
      type: "skill-md",
      description: `Answer questions about ${META.name} from its public docs and MCP server.`,
      url: `${S}/.well-known/agent-skills/${skill}/SKILL.md`,
      digest: `sha256:${createHash("sha256").update(SKILL_MD).digest("hex")}`,
    }],
  }],
  [`agent-skills/${skill}/SKILL.md`]: [SKILL_MD, "text/markdown; charset=utf-8"],
  "http-message-signatures-directory": [{ keys: [WEB_BOT_AUTH_JWK] }, "application/http-message-signatures-directory+json"],
  "jwks.json": [{ keys: [WEB_BOT_AUTH_JWK] }],
  "ai-plugin.json": [{
    schema_version: "v1",
    name_for_human: BOT.name,
    name_for_model: `${META.slug.replace(/-/g, "_")}_bot`,
    description_for_human: `Ask about ${META.name}: ${META.summary}`,
    description_for_model: `Knowledge base for ${META.name}. Fetch ${S}/ai-bot.md for the system prompt, or call the MCP server at ${S}/mcp.`,
    api: { type: "openapi", url: `${S}/.well-known/mcp/server-card.json` },
    ...(META.logoUrl ? { logo_url: META.logoUrl } : {}),
    ...(META.email ? { contact_email: META.email } : {}),
  }],
  "ai-catalog.json": [{
    specVersion: "1.0",
    host: { displayName: META.name, identifier: `did:web:${host}`, documentationUrl: `${S}/llms.txt` },
    entries: [
      {
        identifier: `urn:air:${host}:mcp:${META.slug}-bot`,
        displayName: `${BOT.name} MCP Server`,
        description: `Public, unauthenticated MCP server (Streamable HTTP): ${META.summary}`,
        type: "application/mcp-server-card+json",
        url: `${S}/.well-known/mcp/server-card.json`,
        representativeQueries: META.queries,
      },
      {
        identifier: `urn:air:${host}:skill:${skill}`,
        displayName: `${META.name} Knowledge Skill`,
        description: `Agent skill for answering ${META.name} questions from public docs.`,
        type: "application/agent-skills+json",
        url: `${S}/.well-known/agent-skills/index.json`,
        representativeQueries: [`what does ${META.name} offer`, `contact ${META.name}`],
      },
      {
        identifier: `urn:air:${host}:doc:llms-txt`,
        displayName: `${META.name} llms.txt`,
        description: "Entity card: business facts, services, key pages.",
        type: "text/plain",
        url: `${S}/llms.txt`,
        representativeQueries: [`what is ${META.name}`],
      },
      {
        identifier: `urn:air:${host}:api:api-catalog`,
        displayName: `${META.name} API Catalog (RFC 9727)`,
        description: "Linkset describing the MCP endpoint and bot docs.",
        type: "application/linkset+json",
        url: `${S}/.well-known/api-catalog`,
        representativeQueries: [`list ${META.name} agent endpoints`],
      },
    ],
  }],
  "poppy.json": [{ protocol_version: "0.1", organization: { name: META.name, domain: host }, web: {} }],
};

export async function GET(_req: Request, ctx: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await ctx.params;
  const doc = DOCS[slug.join("/")];
  if (!doc) return new Response("Not found", { status: 404 });
  const [body, type = "application/json; charset=utf-8"] = doc;
  return new Response(typeof body === "string" ? body : JSON.stringify(body, null, 2), {
    headers: { "Content-Type": type, "Access-Control-Allow-Origin": "*", "Cache-Control": "public, s-maxage=3600" },
  });
}
