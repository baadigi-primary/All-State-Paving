import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SITE_SLUG = "all-state-paving";

/**
 * GET /api/cms/posts
 * Returns all blog posts for this site so the BaaDigi dashboard can import /
 * sync them into its blog_posts table. Bearer CMS_SECRET protected.
 * Returns every status (published, scheduled, draft) so the dashboard sees
 * scheduled posts too. Field names match the dashboard's import contract.
 */
export async function GET(request: NextRequest) {
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

  const { data, error } = await supabase
    .from("site_blog_posts")
    .select(
      "title, slug, excerpt, body, cover_image_url, meta_title, meta_description, status, published_at, category"
    )
    .eq("site_slug", SITE_SLUG)
    .order("published_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ posts: data ?? [] });
}
