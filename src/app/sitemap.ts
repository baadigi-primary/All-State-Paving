import type { MetadataRoute } from "next";
import { SERVICES, SITE_URL } from "@/lib/constants";
import { AREAS } from "@/lib/areas-data";
import { getPublishedPosts } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteLastModified = new Date("2026-04-08");

  const staticPages = [
    { url: SITE_URL, lastModified: siteLastModified, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: siteLastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: siteLastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: siteLastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified: siteLastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: siteLastModified, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/faq`, lastModified: siteLastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/areas-served`, lastModified: siteLastModified, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const servicePages = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const posts = await getPublishedPosts();
  const blogPages = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.published_at ? new Date(post.published_at) : siteLastModified,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const areaPages = AREAS.map((area) => ({
    url: `${SITE_URL}/areas-served/${area.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages];
}
