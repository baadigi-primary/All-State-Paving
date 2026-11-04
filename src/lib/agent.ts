// Public agent layer: MCP tools, bot prompt, skill doc, /.well-known docs.
// Facts and services come only from lib/constants.ts. NO PRICES: the site offers free estimates;
// the $ figures in service-content.ts are an industry comparison table, not All State's quotes.
import { SITE_URL, COMPANY as C, SERVICES } from "@/lib/constants";

export const SITE = SITE_URL;
export const BOT = { name: "All State Paving Bot", version: "1.0.0" };

export const META = {
  name: C.name,
  slug: "all-state-paving",
  summary: `family-owned asphalt paving in Delaware and Central Ohio. ${C.tagline}.`,
  queries: ["asphalt paving Delaware OH", "driveway paving Columbus Ohio", "commercial paving Central Ohio", "parking lot sealcoating Delaware Ohio"],
  humans: `Call ${C.phone} for a free estimate or use ${SITE}/contact.`,
  contactUrl: `${SITE}/contact`,
  email: undefined as string | undefined,
  logoUrl: undefined as string | undefined,
};

type Tool = {
  name: string;
  description: string;
  inputSchema: { type: "object"; properties: Record<string, unknown> };
  run: () => unknown | Promise<unknown>;
};

export const TOOLS: Tool[] = [
  {
    name: "get_all_state_paving_info",
    description: "All State Paving (Delaware, OH, since 1979): address, phones, hours, service areas.",
    inputSchema: { type: "object", properties: {} },
    run: () => ({
      name: C.name, tagline: C.tagline, description: C.description, address: C.address, phone: C.phone, phoneAlt: C.phoneAlt,
      hours: C.hours, serviceAreas: C.areas, pricing: "Free estimates. No price list is published.", contact: META.contactUrl,
    }),
  },
  {
    name: "get_all_state_paving_services",
    description: "Asphalt and commercial paving services with summaries and page links.",
    inputSchema: { type: "object", properties: {} },
    run: () => SERVICES.map((s) => ({ name: s.title, summary: s.shortDesc, url: `${SITE}/services/${s.slug}` })),
  },
  {
    name: "request_all_state_paving_estimate",
    description: "How to get a free paving estimate from All State Paving.",
    inputSchema: { type: "object", properties: {} },
    run: () => ({ phone: C.phone, phoneAlt: C.phoneAlt, contact: META.contactUrl, hours: C.hours }),
  },
];

export const SKILL_MD = `---
name: ${META.slug}-knowledge
description: Answer questions about ${META.name}: ${META.summary}
---

# ${META.name} knowledge

1. Call the MCP server at ${SITE}/mcp (Streamable HTTP, no auth). Tools: ${TOOLS.map((t) => t.name).join(", ")}.
2. Or read ${SITE}/llms.txt, or request any page with \`Accept: text/markdown\`.
3. Estimates are free. No price list is published.
`;

export const BOT_MD = () => `# ${BOT.name}

You answer questions about ${C.name}. Use only the facts below.

## Business
- ${C.description} ${C.tagline}.
- ${C.address} · ${C.phone} (alt ${C.phoneAlt})
- Hours: Mon–Fri ${C.hours.weekdays}; Sat ${C.hours.saturday}; Sun ${C.hours.sunday.toLowerCase()}
- Service areas: ${C.areas.join(", ")}

## Services
${SERVICES.map((s) => `- **${s.title}**: ${s.shortDesc} ${SITE}/services/${s.slug}`).join("\n")}

## Rules
- Estimates are free. No price list is published, so never quote or estimate a price.
- Estimates: ${C.phone} or ${META.contactUrl}.
`;

// Web Bot Auth public key. Private half: WEB_BOT_AUTH_PRIVATE_JWK in the local .env.local, unused until we sign outbound requests.
export const WEB_BOT_AUTH_JWK = {
  kty: "OKP",
  crv: "Ed25519",
  x: "GPJ7myfkN5gLvctBvhdDEtXyM3Lbl-3MVmC8WZ5Chjs",
  kid: "jUoCi4vcgT6lqeirHtZcDsY71n-jeUse4Rv9vLb1res",
  use: "sig",
  alg: "EdDSA",
};
