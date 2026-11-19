import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/cms/ingest
 * Called by the BaaDigi dashboard (Bearer CMS_SECRET) after it has saved a post
 * or gallery change itself. This site holds no write key (2026-11-19 key
 * rotation), so all it does is refresh the affected pages.
 */
export async function POST(req: NextRequest) {
  const expected = process.env.CMS_SECRET;
  if (!expected) {
    return NextResponse.json({ error: "server misconfigured" }, { status: 500 });
  }
  if ((req.headers.get("authorization") || "") !== `Bearer ${expected}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let payload: { action?: string; post?: { slug?: string } };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  if (payload.action === "upsert_post") {
    const slug = payload.post?.slug?.replace(/^\/+/, "").replace(/^blog\//, "");
    if (!slug) return NextResponse.json({ error: "missing slug" }, { status: 400 });
    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");
    revalidatePath(`/blog/${slug}`);
    return NextResponse.json({ ok: true });
  }

  if (payload.action === "upsert_gallery_image") {
    revalidatePath("/gallery");
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: `unknown action: ${payload.action}` }, { status: 400 });
}
