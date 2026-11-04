import { BOT, TOOLS, META } from "@/lib/agent";

// Public MCP server, Streamable HTTP, JSON responses, no auth, tools only.
// ponytail: hand-rolled JSON-RPC, no sessions or streaming.
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, MCP-Protocol-Version, Mcp-Session-Id",
};
const json = (body: unknown, status = 200) =>
  Response.json(body, { status, headers: { ...CORS, "Cache-Control": "no-store", "MCP-Protocol-Version": "2025-06-18" } });
const err = (id: unknown, code: number, message: string) => json({ jsonrpc: "2.0", id: id ?? null, error: { code, message } });

export function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}
export function GET() {
  return json({ error: "POST JSON-RPC to this endpoint. Server card: /.well-known/mcp/server-card.json" }, 405);
}

export async function POST(req: Request) {
  let msg: { id?: unknown; method?: string; params?: Record<string, unknown> };
  try { msg = await req.json(); } catch { return err(null, -32700, "Parse error"); }
  const { id, method, params } = msg;
  if (!method) return err(id, -32600, "Invalid Request");
  if (method.startsWith("notifications/")) return new Response(null, { status: 202, headers: CORS });

  switch (method) {
    case "initialize":
      return json({ jsonrpc: "2.0", id, result: {
        protocolVersion: (params?.protocolVersion as string) || "2025-06-18",
        capabilities: { tools: {} },
        serverInfo: BOT,
        instructions: `Public read-only tools about ${META.name}: ${META.summary}`,
      } });
    case "ping":
      return json({ jsonrpc: "2.0", id, result: {} });
    case "tools/list":
      return json({ jsonrpc: "2.0", id, result: {
        tools: TOOLS.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })),
      } });
    case "tools/call": {
      const tool = TOOLS.find((t) => t.name === params?.name);
      if (!tool) return err(id, -32602, `Unknown tool: ${String(params?.name)}`);
      return json({ jsonrpc: "2.0", id, result: { content: [{ type: "text", text: JSON.stringify(await tool.run(), null, 2) }] } });
    }
    default:
      return err(id, -32601, `Method not found: ${method}`);
  }
}
