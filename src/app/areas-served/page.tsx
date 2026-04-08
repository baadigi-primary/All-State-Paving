import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SITE_URL } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Areas Served | Asphalt Paving Across Central Ohio",
  description:
    "All State Paving serves Delaware, Columbus, Sunbury, Marion, London, and all of Central Ohio. 40+ years of trusted paving. Free estimates.",
  alternates: { canonical: `${SITE_URL}/areas-served` },
};

const areas = [
  {
    name: "Delaware",
    desc: "Our home base. We've been proudly serving the Delaware community since 1979 with top-quality paving solutions.",
  },
  {
    name: "Sunbury",
    desc: "Providing residential and commercial paving services to Sunbury homeowners and businesses.",
  },
  {
    name: "London",
    desc: "Serving London and Madison County with professional asphalt paving, repair, and sealcoating.",
  },
  {
    name: "Marion",
    desc: "Delivering quality paving solutions to Marion and surrounding communities for over four decades.",
  },
  {
    name: "Columbus",
    desc: "Extending our services to the greater Columbus area for commercial and residential paving projects.",
  },
  {
    name: "Westerville",
    desc: "Trusted paving services for Westerville properties, from driveways to commercial parking lots.",
  },
  {
    name: "Powell",
    desc: "Quality asphalt paving for Powell's growing residential and commercial developments.",
  },
  {
    name: "Dublin",
    desc: "Serving Dublin businesses and homeowners with reliable, long-lasting paving solutions.",
  },
  {
    name: "Marysville",
    desc: "Professional paving services for the Marysville and Union County community.",
  },
  {
    name: "Mount Vernon",
    desc: "Extending our 40+ years of expertise to Mount Vernon and Knox County.",
  },
];

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
    areaServed: areas.map((area) => ({
      "@type": "City",
      name: `${area.name}, Ohio`,
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
              Serving <span className="section-heading">Central Ohio</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All State Paving proudly serves communities across Central Ohio.
              With over 40 years of experience, we bring quality paving solutions
              right to your neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div
                key={area.name}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-navy">{area.name}, OH</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
              </div>
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
