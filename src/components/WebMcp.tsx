"use client";

import { useEffect } from "react";

type ModelContext = { registerTool: (tool: unknown, opts?: { signal: AbortSignal }) => unknown };
type ToolMeta = { name: string; description: string; inputSchema: unknown };

const rpc = (method: string, params?: unknown) =>
  fetch("/mcp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }) }).then((r) => r.json());

// WebMCP: expose the /mcp tools to browser agents (document.modelContext). No-op where unsupported.
// Tools are fetched from /mcp, not imported, so the server-side agent module stays out of the browser bundle.
export default function WebMcp() {
  useEffect(() => {
    const w = window as unknown as { document: { modelContext?: ModelContext }; navigator: { modelContext?: ModelContext } };
    const mc = w.document.modelContext ?? w.navigator.modelContext;
    if (!mc?.registerTool) return;
    const ac = new AbortController();
    rpc("tools/list").then(({ result }: { result?: { tools: ToolMeta[] } }) => {
      if (ac.signal.aborted) return;
      for (const t of result?.tools ?? []) {
        mc.registerTool({ ...t, execute: async (args: unknown) => (await rpc("tools/call", { name: t.name, arguments: args ?? {} })).result }, { signal: ac.signal });
      }
    }).catch(() => {});
    mc.registerTool({
      name: "navigate_to_page",
      description: "Navigate this tab to a path on this website (e.g. /contact).",
      inputSchema: { type: "object", properties: { path: { type: "string", description: "Site-relative path starting with /" } }, required: ["path"] },
      execute: async ({ path }: { path: string }) => { if (path.startsWith("/") && !path.startsWith("//")) location.assign(path); return { navigated: path }; },
    }, { signal: ac.signal });
    return () => ac.abort();
  }, []);
  return null;
}
