import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// The organization ID for All State Paving in the BaaDigi dashboard
export const ORG_ID = process.env.SUPABASE_ORG_ID!;

export interface BlogPostRow {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  cover_image_url: string | null;
  status: string;
  category: string | null;
  seo_title: string | null;
  seo_description: string | null;
  published_at: string | null;
  created_at: string;
}

export async function getPublishedPosts(): Promise<BlogPostRow[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("organization_id", ORG_ID)
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
    .from("blog_posts")
    .select("*")
    .eq("organization_id", ORG_ID)
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
    .from("blog_posts")
    .select("slug")
    .eq("organization_id", ORG_ID)
    .eq("status", "published");

  if (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }

  return (data ?? []).map((p) => p.slug);
}
