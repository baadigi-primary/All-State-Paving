import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SITE_URL } from "@/lib/constants";
import { AREAS } from "@/lib/areas-data";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Areas Served | Asphalt Paving in Gainesville, FL",
  description:
    "All State Paving serves Gainesville, Florida and surrounding areas. 40+ years of trusted paving. Free estimates.",
  alternates: { canonical: `${SITE_URL}/areas-served` },
};

export default function AreasServedPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Areas Served", item: `${SITE_URL}/areas-served` },
    ],
  };

  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY.name,
    url: SITE_URL,
    areaServed: AREAS.map((area) => ({
      "@type": "City",
      name: `${area.name}, ${area.stateName ?? "Ohio"}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceAreaSchema} />
      <PageHero
        title="Areas We Serve"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas Served" },
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
              Serving <span className="section-heading">Gainesville, FL</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All State Paving proudly serves Gainesville, Florida and
              surrounding areas. With over 40 years
              of experience, we bring quality paving solutions right to your
              neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...AREAS.filter((a) => a.state === "FL"), ...AREAS.filter((a) => a.state !== "FL")].map((area) => (
              <Link
                key={area.name}
                href={`/areas-served/${area.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">{area.name}, {area.state ?? "OH"}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{area.intro.split("\n\n")[0].slice(0, 150)}...</p>
                <span className="text-gold font-semibold text-sm">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Don&apos;t See Your Area?
          </h2>
          <p className="text-gray-300 mb-8">
            We may still be able to help! Give us a call to discuss your paving
            project and find out if we service your area.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="bg-red hover:bg-red-dark text-white font-bold px-8 py-3.5 rounded transition-colors"
            >
              CALL {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-3.5 rounded transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
