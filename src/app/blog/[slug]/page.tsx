import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedPosts, getAllPostSlugs } from "@/lib/supabase";
import { COMPANY, SITE_URL } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";

export const revalidate = 300; // Revalidate every 5 minutes

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  const seoTitle = (post.meta_title || post.title).replace(
    /\s*\|\s*All State Paving\s*$/i,
    ""
  );
  return {
    title: seoTitle,
    description: post.meta_description || post.excerpt || "",
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt || "",
      url: `${SITE_URL}/blog/${slug}`,
      images: post.cover_image_url
        ? [{ url: post.cover_image_url, alt: post.title }]
        : [],
    },
  };
}

const LINK_CLASS = "text-gold hover:text-gold/80 underline";

function inlineMd(s: string): string {
  return s
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-navy">$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, `<a href="$2" class="${LINK_CLASS}">$1</a>`)
    .replace(/\*([^*\n]+?)\*/g, "<em>$1</em>");
}

function tableCells(line: string): string[] {
  return line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
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
      if (/^-{3,}$/.test(trimmed)) {
        return `<hr class="my-10 border-gray-200" />`;
      }
      const lines = trimmed.split("\n");
      // Image, with an optional *caption* on the next line
      const img = lines[0].match(/^!\[(.*?)\]\((.+?)\)$/);
      if (img && lines.length <= 2) {
        const caption = lines[1]?.trim().replace(/^\*(.+)\*$/, "$1");
        return `<figure class="my-8"><img src="${img[2]}" alt="${img[1].replace(/"/g, "&quot;")}" loading="lazy" class="w-full rounded-lg" />${
          caption ? `<figcaption class="text-sm text-gray-500 mt-2 text-center">${inlineMd(caption)}</figcaption>` : ""
        }</figure>`;
      }
      // Table: header row, |---| divider, body rows
      if (lines.length >= 2 && lines.every((l) => l.trim().startsWith("|")) && /^\|[\s:|-]+\|$/.test(lines[1].trim())) {
        const head = tableCells(lines[0])
          .map((c) => `<th class="text-left font-bold text-navy px-4 py-3 border-b-2 border-gold">${inlineMd(c)}</th>`)
          .join("");
        const rows = lines
          .slice(2)
          .map(
            (l) =>
              `<tr class="border-b border-gray-200">${tableCells(l)
                .map((c) => `<td class="px-4 py-3 text-gray-600 align-top">${inlineMd(c)}</td>`)
                .join("")}</tr>`
          )
          .join("");
        return `<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse"><thead><tr class="bg-gray-50">${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
      }
      if (lines.every((l) => /^\d+\.\s/.test(l.trimStart()))) {
        const items = lines
          .map((l) => `<li>${inlineMd(l.trimStart().replace(/^\d+\.\s+/, ""))}</li>`)
          .join("");
        return `<ol class="list-decimal pl-6 space-y-2 my-4 text-gray-600 leading-relaxed marker:text-gold marker:font-bold">${items}</ol>`;
      }
      if (lines.every((l) => l.trimStart().startsWith("- "))) {
        const items = lines
          .map(
            (l) =>
              `<li class="flex items-start gap-2"><span class="text-gold mt-1.5 shrink-0">•</span><span>${inlineMd(l.trimStart().slice(2))}</span></li>`
          )
          .join("");
        return `<ul class="space-y-2 my-4">${items}</ul>`;
      }
      return `<p class="text-gray-600 leading-relaxed mb-4">${inlineMd(trimmed).replace(/\n/g, "<br />")}</p>`;
    })
    .join("\n");
}

// Question/answer pairs written as "**Question?**\nAnswer" (Quick Answers and FAQ sections).
function extractFaqs(md: string): { q: string; a: string }[] {
  const plain = (s: string) =>
    s.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\(.+?\)/g, "$1").replace(/\s+/g, " ").trim();
  return md
    .split("\n\n")
    .map((b) => b.trim().match(/^\*\*(.+?\?)\*\*\n([\s\S]+)$/))
    .filter((m): m is RegExpMatchArray => !!m)
    .map((m) => ({ q: plain(m[1]), a: plain(m[2]) }));
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getPublishedPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.cover_image_url
      ? new URL(post.cover_image_url, SITE_URL).toString()
      : undefined,
    datePublished: post.published_at
      ? new Date(post.published_at).toISOString()
      : new Date(post.created_at).toISOString(),
    dateModified: new Date(post.updated_at).toISOString(),
    author: {
      "@type": "Organization",
      name: "All State Paving",
      url: `${SITE_URL}/about`,
      foundingDate: "1979",
      sameAs: [COMPANY.facebook],
      description:
        "Family-owned asphalt paving contractor serving Gainesville, FL and Central Ohio, in business since 1979, with 2,500+ completed projects.",
    },
    contentLocation: {
      "@type": "City",
      name: `${COMPANY.city}, ${COMPANY.region}`,
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

  const faqs = extractFaqs(post.body ?? "");
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={blogPostSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqs.length > 0 && <JsonLd data={faqSchema} />}
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
              {post.cover_image_url && (
                <div className="relative h-80 rounded-lg overflow-hidden mb-8">
                  <Image
                    src={post.cover_image_url}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex items-center gap-4 mb-6 text-sm">
                {post.category && (
                  <span className="bg-gold text-navy font-bold px-3 py-1 rounded">
                    {post.category}
                  </span>
                )}
                {post.published_at && (
                  <time className="text-gray-400">
                    {formatDate(post.published_at)}
                  </time>
                )}
                <span className="text-gray-400">|</span>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-navy transition-colors"
                >
                  By All State Paving
                </Link>
              </div>

              {post.body && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: markdownToHtml(post.body),
                  }}
                />
              )}

              {/* CTA */}
              <div data-nosnippet className="bg-navy rounded-lg p-8 text-center mt-12">
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
            <div data-nosnippet className="space-y-8">
              {/* Recent Posts */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-navy mb-4 border-b border-gray-200 pb-3">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {allPosts.map((p) => (
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
                        {p.published_at && (
                          <span className="block text-xs text-gray-400 mt-0.5">
                            {formatDate(p.published_at)}
                          </span>
                        )}
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
                  {Array.from(
                    new Set(allPosts.map((p) => p.category).filter(Boolean))
                  ).map((cat) => (
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
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div data-nosnippet className="mt-20">
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
                    {p.cover_image_url && (
                      <div className="h-44 overflow-hidden relative">
                        <Image
                          src={p.cover_image_url}
                          alt={p.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {p.category && (
                          <span className="absolute top-3 left-3 bg-gold text-navy text-xs font-bold px-2 py-0.5 rounded">
                            {p.category}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="p-5">
                      {p.published_at && (
                        <time className="text-gray-400 text-xs">
                          {formatDate(p.published_at)}
                        </time>
                      )}
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
