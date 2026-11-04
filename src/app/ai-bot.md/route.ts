import { BOT_MD } from "@/lib/agent";

export function GET() {
  return new Response(BOT_MD(), { headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, s-maxage=3600" } });
}
