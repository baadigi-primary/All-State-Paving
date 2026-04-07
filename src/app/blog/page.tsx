import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and news about asphalt paving, maintenance, and more from All State Paving in Central Ohio.",
};

const posts = [
  {
    slug: "benefits-of-asphalt-paving",
    title: "5 Benefits of Asphalt Paving for Your Property",
    excerpt:
      "Discover why asphalt is the preferred choice for driveways, parking lots, and roads. From durability to cost-effectiveness, learn the key advantages.",
    date: "March 15, 2026",
    category: "Tips",
    img: "/images/asphalt-paving-blog.jpg",
  },
  {
    slug: "when-to-repair-vs-replace",
    title: "When to Repair vs. Replace Your Asphalt",
    excerpt:
      "Not sure if your pavement needs a simple repair or a full replacement? Here's how to tell the difference and make the right decision for your budget.",
    date: "February 28, 2026",
    category: "Guide",
    img: "/images/asphalt-repair-detail.jpg",
  },
  {
    slug: "asphalt-maintenance-tips",
    title: "Essential Asphalt Maintenance Tips for Ohio Winters",
    excerpt:
      "Ohio winters can be tough on asphalt. Learn how to protect your pavement from freeze-thaw cycles, salt damage, and seasonal wear.",
    date: "January 10, 2026",
    category: "Maintenance",
    img: "/images/asphalt-sealing.jpg",
  },
  {
    slug: "commercial-paving-guide",
    title: "A Business Owner's Guide to Commercial Paving",
    excerpt:
      "Everything you need to know about planning a commercial paving project, from permits to materials to choosing the right contractor.",
    date: "December 5, 2025",
    category: "Guide",
    img: "/images/commercial-paving.webp",
  },
  {
    slug: "sealcoating-importance",
    title: "Why Sealcoating is Critical for Your Asphalt",
    excerpt:
      "Sealcoating extends the life of your asphalt by years. Learn when, why, and how often you should sealcoat your driveway or parking lot.",
    date: "November 20, 2025",
    category: "Maintenance",
    img: "/images/lot-striping-3.jpg",
  },
  {
    slug: "choosing-paving-contractor",
    title: "How to Choose the Right Paving Contractor",
    excerpt:
      "Don't get burned by a bad contractor. Here are the key factors to look for when hiring a professional paving company.",
    date: "October 12, 2025",
    category: "Tips",
    img: "/images/paving-construction.jpg",
  },
];

export default function BlogPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <time className="text-gray-400 text-xs">{post.date}</time>
                  <h3 className="text-lg font-bold text-navy mt-1 mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-gold font-semibold text-sm flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
