import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPublishedPosts } from "@/lib/supabase";
import PageHero from "@/components/PageHero";
import { SITE_URL } from "@/lib/constants";

export const revalidate = 300; // Revalidate every 5 minutes

export const metadata: Metadata = {
  title: "Asphalt Paving Tips & Guides | All State Paving Blog",
  description:
    "Expert tips on asphalt paving, maintenance, and repair from Central Ohio's trusted contractor. Guides for homeowners and businesses. Read now.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <PageHero
        title="Blog"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">No blog posts yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  {post.cover_image_url && (
                    <div className="h-48 overflow-hidden relative">
                      <Image
                        src={post.cover_image_url}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {post.category && (
                        <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded">
                          {post.category}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    {post.published_at && (
                      <time className="text-gray-400 text-xs">
                        {formatDate(post.published_at)}
                      </time>
                    )}
                    <h2 className="text-lg font-bold text-navy mt-1 mb-2 group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="text-gold font-semibold text-sm flex items-center gap-1">
                      Read More
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
