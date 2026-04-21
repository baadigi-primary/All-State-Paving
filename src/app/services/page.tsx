import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES, SITE_URL } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Asphalt Paving Services in Central Ohio | All State Paving",
  description:
    "Full-service asphalt paving: driveways, parking lots, commercial, residential, farm lanes, and repair in Central Ohio. Free estimates available.",
  alternates: { canonical: `${SITE_URL}/services` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
  ],
};

const servicesItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Asphalt Paving Services",
  description:
    "Full-service asphalt paving in Central Ohio including driveways, parking lots, commercial paving, repair, sealcoating, and line striping.",
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/services/${s.slug}`,
    name: s.title,
    description: s.shortDesc,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={servicesItemListSchema} />
      <PageHero
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
              What We <span className="section-heading">Offer</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As a full-service asphalt paving company, we offer a comprehensive
              range of residential and commercial services designed to meet your
              specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={serviceImages[i]}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                  <span className="text-gold font-semibold text-sm flex items-center gap-1">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const serviceImages = [
  "/images/asphalt-paving-blog.jpg",
  "/images/commercial-paving.webp",
  "/images/residential-paving.jpeg",
  "/images/asphalt-repair-detail.jpg",
  "/images/driveway-1.jpg",
  "/images/private-road.jpg",
  "/images/farm-lane-paving.jpg",
  "/images/parking-lot.jpg",
  "/images/asphalt-sealing.jpg",
  "/images/lot-striping-1.jpg",
];
