import { SITE, META } from "@/lib/agent";

const BODY = `# auth.md

You are an agent that wants to use ${META.name}'s public knowledge and tools at ${SITE}. This file is the registration and auth recipe.

## Current state

Everything agent-facing on this host is **public**. No OAuth token, API key, or registration is needed to read docs or call the MCP tools. The OAuth metadata exists so discovery works; the only credential it issues is an anonymous \`public:read\` token that grants nothing extra.

## 1. Discover

- Protected Resource Metadata (RFC 9728): GET ${SITE}/.well-known/oauth-protected-resource
- Authorization Server Metadata (RFC 8414): GET ${SITE}/.well-known/oauth-authorization-server
- Read \`agent_auth.identity_types_supported\` → \`anonymous\` only.

## 2. Use public resources (no token)

| Surface | URL | Auth |
| --- | --- | --- |
| System prompt | GET ${SITE}/ai-bot.md | none |
| Entity card | GET ${SITE}/llms.txt | none |
| Page as markdown | GET page with \`Accept: text/markdown\` | none |
| MCP (Streamable HTTP) | POST ${SITE}/mcp | none |
| MCP Server Card | GET ${SITE}/.well-known/mcp/server-card.json | none |
| Agent skill | GET ${SITE}/.well-known/agent-skills/${META.slug}-knowledge/SKILL.md | none |
| Web Bot Auth directory | GET ${SITE}/.well-known/http-message-signatures-directory | none |

Do not send a bearer token for these.

## 3. Anonymous token (optional, grants nothing extra)

POST ${SITE}/api/oauth/token with \`grant_type=client_credentials\` → \`{ "access_token": "public", "token_type": "Bearer", "scope": "public:read" }\`.

## 4. Humans

${META.humans}
`;

export function GET() {
  return new Response(BODY, { headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, s-maxage=3600" } });
}
