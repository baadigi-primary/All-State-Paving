import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY, SERVICES, SITE_URL } from "@/lib/constants";
import { AREAS } from "@/lib/areas-data";
import { COMPARE_PAGES } from "@/lib/compare-content";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return COMPARE_PAGES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const page = COMPARE_PAGES.find((p) => p.slug === slug);
    if (!page) return { title: "Comparison Not Found" };
    return {
      title: page.metaTitle,
      description: page.metaDescription,
      alternates: { canonical: `${SITE_URL}/compare/${slug}` },
    };
  });
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = COMPARE_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();

  const url = `${SITE_URL}/compare/${slug}`;

  // Article schema — freshness + author (Organization). No fabricated reviews.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.metaDescription,
    author: { "@type": "Organization", name: COMPANY.name, url: SITE_URL },
    publisher: { "@type": "Organization", name: COMPANY.name, url: SITE_URL },
    dateModified: "2026-07-14",
    mainEntityOfPage: url,
    url,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE_URL}/compare` },
      { "@type": "ListItem", position: 3, name: page.title, item: url },
    ],
  };

  // FAQPage schema — helps AI extraction (Google removed the FAQ SERP box, still valid for GEO).
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <PageHero
        title={page.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Compare", href: "/compare" },
          { label: page.title },
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-navy mb-2">
                {page.optionA} vs {page.optionB}: Which Is Right for You?
              </h2>
              <p className="text-sm text-gray-400 mb-6">
                Last updated: {page.lastUpdated}
              </p>

              {/* ANSWER PASSAGE — self-contained, quotable-first (the AI-search lever) */}
              <div className="border-l-4 border-gold bg-gray-50 rounded-r-lg p-6 mb-6">
                <p className="text-lg text-navy leading-relaxed font-medium">
                  {page.answerPassage}
                </p>
              </div>

              {/* Trust line — kept out of snippets so Google can't quote it */}
              <div
                data-nosnippet
                className="flex items-center gap-2 text-sm text-gray-500 mb-2"
              >
                <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {page.trustLine}
              </div>
              <p className="text-xs text-gray-400 mb-8 italic">{page.experienceLine}</p>

              {/* Comparison table — near the top, highly citable for AI Overviews / GEO */}
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-12">
                <table className="w-full text-sm text-left">
                  <thead className="bg-navy text-white">
                    <tr>
                      {page.comparisonTable.columns.map((col) => (
                        <th key={col} className="px-4 py-3 font-bold">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {page.comparisonTable.rows.map((row, ri) => (
                      <tr key={ri} className={ri % 2 ? "bg-gray-50" : "bg-white"}>
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={`px-4 py-3 text-gray-600 ${ci === 0 ? "font-semibold text-navy" : ""}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Per-factor sections — each H3 is a question with a standalone answer */}
              <div className="space-y-8">
                {page.factors.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-xl font-bold text-navy mb-2">{f.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>

              {/* Decision buckets */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-navy mb-6">
                  Which Should You Choose?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[page.decision.pickA, page.decision.pickB].map((pick) => (
                    <div
                      key={pick.heading}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <h4 className="font-bold text-navy mb-4">{pick.heading}</h4>
                      <ul className="space-y-3">
                        {pick.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                            <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-gold/10 border border-gold rounded-lg p-6 mt-6">
                  <p className="text-navy leading-relaxed">
                    <span className="font-bold">Bottom line: </span>
                    {page.decision.bottomLine}
                  </p>
                </div>
              </div>

              {/* Related services (internal linking — mandatory) */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-navy mb-4">Related Services</h3>
                <div className="flex flex-wrap gap-3">
                  {page.relatedServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 hover:border-gold hover:text-navy transition-colors"
                    >
                      {s.title} →
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-navy mb-6">
                  {page.title} FAQ
                </h3>
                <div className="space-y-4">
                  {page.faq.map((item) => (
                    <div key={item.q} className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-navy mb-2">{item.q}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-navy rounded-lg p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Not Sure Which Is Right for Your Property?
                </h3>
                <p className="text-gray-300 mb-6">
                  Get a free, no-pressure on-site assessment from a Central Ohio paving expert.
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
                    GET A FREE QUOTE
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-navy mb-4 border-b border-gray-200 pb-3">
                  Our Services
                </h3>
                <ul className="space-y-1">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="block px-3 py-2 rounded text-sm text-gray-600 hover:bg-gray-100 hover:text-navy transition-colors"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-4">Get a Free Quote</h3>
                <QuoteForm />
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-navy mb-4 border-b border-gray-200 pb-3">
                  Areas We Serve
                </h3>
                <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {AREAS.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/areas-served/${a.slug}`}
                        className="block px-2 py-1.5 rounded text-sm text-gray-600 hover:bg-gray-100 hover:text-navy transition-colors"
                      >
                        {a.name}, OH
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
