// robots.txt as a plain route: MetadataRoute.Robots can't emit Content-Signal or Agentmap.
// Body = the live robots.txt as of install, plus Content-Signal and Agentmap. Edit the text here.
export const dynamic = "force-static";

const BODY = "User-Agent: *\nContent-Signal: ai-train=yes, search=yes, ai-input=yes\nAllow: /\nAllow: /api/md\nAllow: /api/oauth/\nDisallow: /api/\n\nSitemap: https://www.allstatepavenow.com/sitemap.xml\nAgentmap: https://www.allstatepavenow.com/.well-known/ai-catalog.json\n";

export function GET() {
  return new Response(BODY, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, s-maxage=3600" } });
}
