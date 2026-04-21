import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const SITE_SLUG = "all-state-paving";

export interface BlogPostRow {
  id: string;
  site_slug: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string | null;
  cover_image_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  status: string;
  published_at: string | null;
  category: string | null;
  created_at: string;
  updated_at: string;
}

export async function getPublishedPosts(): Promise<BlogPostRow[]> {
  const { data, error } = await supabase
    .from("site_blog_posts")
    .select("*")
    .eq("site_slug", SITE_SLUG)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }

  return data ?? [];
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPostRow | null> {
  const { data, error } = await supabase
    .from("site_blog_posts")
    .select("*")
    .eq("site_slug", SITE_SLUG)
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }

  return data;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from("site_blog_posts")
    .select("slug")
    .eq("site_slug", SITE_SLUG)
    .eq("status", "published");

  if (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }

  return (data ?? []).map((p) => p.slug);
}
