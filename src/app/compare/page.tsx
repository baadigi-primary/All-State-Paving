import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { COMPARE_PAGES } from "@/lib/compare-content";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Paving Comparison Guides | Asphalt vs Concrete & More | All State Paving",
  description:
    "Straight-answer comparison guides for Central Ohio property owners — asphalt vs concrete driveways, overlay vs replacement, and more. Compare lifespan, maintenance, and cold-weather performance.",
  alternates: { canonical: `${SITE_URL}/compare` },
};

export default function CompareIndexPage() {
  return (
    <>
      <PageHero
        title="Paving Comparison Guides"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Compare" }]}
      />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-10 text-lg">
            Trying to decide between two paving options? These straight-answer guides break
            down the real tradeoffs — lifespan, maintenance, and cold-weather performance —
            for Delaware and Central Ohio homeowners and property managers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPARE_PAGES.map((p) => (
              <Link
                key={p.slug}
                href={`/compare/${p.slug}`}
                className="group border border-gray-200 rounded-lg p-6 hover:border-gold transition-colors"
              >
                <span className="inline-block bg-gold/10 text-navy text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {p.optionA} vs {p.optionB}
                </span>
                <h2 className="text-xl font-bold text-navy mb-2 group-hover:text-red transition-colors">
                  {p.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">{p.metaDescription}</p>
                <span className="text-gold font-semibold text-sm mt-4 inline-block">
                  Read the comparison →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
