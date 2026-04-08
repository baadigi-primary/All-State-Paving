import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { COMPANY, SITE_URL } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found" };
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `${SITE_URL}/blog/${slug}` },
      openGraph: {
        type: "article",
        title: post.title,
        description: post.excerpt,
        url: `${SITE_URL}/blog/${slug}`,
        images: [{ url: post.img, alt: post.title }],
      },
    };
  });
}

function markdownToHtml(md: string): string {
  return md
    .trim()
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("## ")) {
        return `<h2 class="text-2xl font-bold text-navy mt-10 mb-4">${trimmed.slice(3)}</h2>`;
      }
      if (trimmed.startsWith("### ")) {
        return `<h3 class="text-xl font-bold text-navy mt-8 mb-3">${trimmed.slice(4)}</h3>`;
      }
      // Handle list blocks
      const lines = trimmed.split("\n");
      if (lines.every((l) => l.trimStart().startsWith("- "))) {
        const items = lines
          .map((l) => {
            const text = l.trimStart().slice(2);
            // Bold prefix handling
            const boldMatch = text.match(/^\*\*(.+?)\*\*(.*)$/);
            const linkReplace = (s: string) => s.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-gold hover:text-gold/80 underline">$1</a>');
            if (boldMatch) {
              return `<li class="flex items-start gap-2"><span class="text-gold mt-1.5 shrink-0">•</span><span><strong class="text-navy">${boldMatch[1]}</strong>${linkReplace(boldMatch[2])}</span></li>`;
            }
            return `<li class="flex items-start gap-2"><span class="text-gold mt-1.5 shrink-0">•</span><span>${linkReplace(text)}</span></li>`;
          })
          .join("");
        return `<ul class="space-y-2 my-4">${items}</ul>`;
      }
      // Regular paragraph — handle inline bold and links
      const html = trimmed
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-navy">$1</strong>')
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-gold hover:text-gold/80 underline">$1</a>')
        .replace(/\n/g, "<br />");
      return `<p class="text-gray-600 leading-relaxed mb-4">${html}</p>`;
    })
    .join("\n");
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const relatedPosts = BLOG_POSTS.filter((_, i) => i !== currentIndex).slice(0, 3);

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.img}`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: "All State Paving Team",
      url: `${SITE_URL}/about`,
      description: "The All State Paving team has been serving Central Ohio with professional asphalt paving services since 1979.",
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={blogPostSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="relative h-80 rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="bg-gold text-navy font-bold px-3 py-1 rounded">
                  {post.category}
                </span>
                <time className="text-gray-400">{post.date}</time>
                <span className="text-gray-400">|</span>
                <Link href="/about" className="text-gray-500 hover:text-navy transition-colors">
                  By All State Paving Team
                </Link>
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
              />

              {/* CTA */}
              <div className="bg-navy rounded-lg p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Need Paving Services?
                </h3>
                <p className="text-gray-300 mb-6">
                  Contact All State Paving today for a free estimate on your
                  project.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={`tel:${COMPANY.phoneTel}`}
                    className="bg-red hover:bg-red-dark text-white font-bold px-8 py-3 rounded transition-colors"
                  >
                    CALL {COMPANY.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-3 rounded transition-colors"
                  >
                    GET A QUOTE
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-navy mb-4 border-b border-gray-200 pb-3">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {BLOG_POSTS.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className={`block text-sm transition-colors ${
                          p.slug === slug
                            ? "text-gold font-semibold"
                            : "text-gray-600 hover:text-navy"
                        }`}
                      >
                        <span className="font-medium">{p.title}</span>
                        <span className="block text-xs text-gray-400 mt-0.5">
                          {p.date}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-navy mb-4 border-b border-gray-200 pb-3">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Tips", "Guide", "Maintenance"].map((cat) => (
                    <span
                      key={cat}
                      className="bg-white border border-gray-200 text-gray-600 text-sm px-3 py-1.5 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-navy rounded-lg p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Need Help?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Our paving experts are here to answer your questions.
                </p>
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="flex items-center gap-2 text-gold font-bold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-black text-navy mb-8">
                Related <span className="section-heading">Articles</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-44 overflow-hidden relative">
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-gold text-navy text-xs font-bold px-2 py-0.5 rounded">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <time className="text-gray-400 text-xs">{p.date}</time>
                      <h3 className="text-sm font-bold text-navy mt-1 group-hover:text-gold transition-colors">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
