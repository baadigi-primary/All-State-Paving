import TurndownService from "turndown";
import { SITE } from "@/lib/agent";

// Markdown for Agents: middleware/proxy rewrites `Accept: text/markdown` requests here.
// Fetches our own rendered HTML and converts it. ponytail: whole <main> (or <body>), no per-page curation.
const td = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" });
td.remove(["script", "style", "noscript", "iframe", "nav", "footer", "form", "button"]);
td.addRule("svg", { filter: (n) => n.nodeName === "SVG", replacement: () => "" });

export async function GET(req: Request) {
  const path = req.headers.get("x-md-path") || "/";
  if (!path.startsWith("/") || path.startsWith("//")) return new Response("bad path", { status: 400 });
  const res = await fetch(`${SITE}${path}`, { headers: { Accept: "text/html" }, next: { revalidate: 3600 } });
  if (!res.ok) return new Response(`# ${res.status}\n`, { status: res.status, headers: { "Content-Type": "text/markdown; charset=utf-8" } });
  const html = await res.text();
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim().replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html.match(/<body[\s\S]*<\/body>/i)?.[0] ?? html;
  const md = `${title ? `# ${title}\n\n` : ""}${td.turndown(main).replace(/\n{3,}/g, "\n\n").trim()}\n\n---\nSource: ${SITE}${path} · Agent docs: ${SITE}/llms.txt · ${SITE}/ai-bot.md\n`;
  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(Math.ceil(md.length / 4)), // ponytail: chars/4 ≈ tokens
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      Vary: "Accept",
    },
  });
}
