import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

const SITE_SLUG = "all-state-paving";

type UpsertPostPayload = {
  action: "upsert_post";
  post: {
    title: string;
    slug: string;
    excerpt?: string | null;
    body?: string | null;
    cover_image_url?: string | null;
    meta_title?: string | null;
    meta_description?: string | null;
    status?: string;
    published_at?: string | null;
    category?: string | null;
  };
};

type UpsertGalleryPayload = {
  action: "upsert_gallery_image";
  images: Array<{
    src: string;
    alt?: string | null;
    category?: string | null;
    sort_order?: number | null;
  }>;
};

type IngestPayload = UpsertPostPayload | UpsertGalleryPayload;

export async function POST(request: NextRequest) {
  const auth = request.headers.get("authorization");
  const secret = process.env.CMS_SECRET;
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json(
      { error: "Supabase env vars missing on site" },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, serviceKey);

  let payload: IngestPayload;
  try {
    payload = (await request.json()) as IngestPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (payload.action === "upsert_post") {
    const p = payload.post;
    if (!p?.title || !p?.slug) {
      return NextResponse.json(
        { error: "post.title and post.slug are required" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("site_blog_posts")
      .upsert(
        {
          site_slug: SITE_SLUG,
          slug: p.slug,
          title: p.title,
          excerpt: p.excerpt ?? null,
          body: p.body ?? null,
          cover_image_url: p.cover_image_url ?? null,
          meta_title: p.meta_title ?? null,
          meta_description: p.meta_description ?? null,
          status: p.status ?? "published",
          published_at: p.published_at ?? null,
          category: p.category ?? null,
        },
        { onConflict: "site_slug,slug" }
      );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    revalidatePath("/blog");
    revalidatePath(`/blog/${p.slug}`);
    revalidatePath("/sitemap.xml");

    return NextResponse.json({ success: true, slug: p.slug });
  }

  if (payload.action === "upsert_gallery_image") {
    if (!Array.isArray(payload.images) || payload.images.length === 0) {
      return NextResponse.json(
        { error: "images array is required" },
        { status: 400 }
      );
    }

    const rows = payload.images.map((img) => ({
      site_slug: SITE_SLUG,
      src: img.src,
      alt: img.alt ?? null,
      category: img.category ?? null,
      sort_order: img.sort_order ?? null,
    }));

    const { error } = await supabase
      .from("site_gallery_images")
      .upsert(rows, { onConflict: "site_slug,src" });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    revalidatePath("/gallery");

    return NextResponse.json({ success: true, count: rows.length });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
