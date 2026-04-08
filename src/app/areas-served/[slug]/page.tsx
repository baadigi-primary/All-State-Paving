import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AREAS } from "@/lib/areas-data";
import { SERVICES, COMPANY, SITE_URL } from "@/lib/constants";
import { SERVICE_IMAGES } from "@/lib/images";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const area = AREAS.find((a) => a.slug === slug);
    if (!area) return { title: "Area Not Found" };
    return {
      title: `Asphalt Paving in ${area.name}, OH | All State Paving`,
      description: `Professional asphalt paving services in ${area.name}, ${area.county}, Ohio. Driveways, parking lots, repairs, and sealcoating. Family-owned since 1979. Free estimates.`,
      alternates: { canonical: `${SITE_URL}/areas-served/${slug}` },
    };
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const areaServices = SERVICES.filter((s) =>
    area.services.includes(s.slug)
  );
  const nearbyAreas = AREAS.filter((a) =>
    area.nearbyAreas.includes(a.name)
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Areas Served", item: `${SITE_URL}/areas-served` },
      { "@type": "ListItem", position: 3, name: `${area.name}, OH`, item: `${SITE_URL}/areas-served/${slug}` },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: COMPANY.name,
    url: SITE_URL,
    telephone: COMPANY.phone,
    areaServed: {
      "@type": "City",
      name: `${area.name}, Ohio`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "175 South Sandusky St, Suite 398",
      addressLocality: "Delaware",
      addressRegion: "OH",
      postalCode: "43015",
      addressCountry: "US",
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />
      <PageHero
        title={`Asphalt Paving in ${area.name}, OH`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas Served", href: "/areas-served" },
          { label: `${area.name}, OH` },
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-navy mb-6">
                {area.headline}
              </h2>

              {area.intro.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-600 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}

              {/* Services in this area */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-navy mb-6">
                  Our Services in {area.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {areaServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-4 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors group"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={SERVICE_IMAGES[service.slug]}
                          alt={service.title}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy group-hover:text-gold transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {service.shortDesc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-navy rounded-lg p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready to Get Started in {area.name}?
                </h3>
                <p className="text-gray-300 mb-6">
                  Call us today for a free estimate on your paving project in{" "}
                  {area.name} and {area.county}.
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
              {/* Quote Form */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-4">
                  Free Quote for {area.name}
                </h3>
                <QuoteForm />
              </div>

              {/* Nearby Areas */}
              {nearbyAreas.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-navy mb-4 border-b border-gray-200 pb-3">
                    Nearby Areas
                  </h3>
                  <ul className="space-y-2">
                    {nearbyAreas.map((nearby) => (
                      <li key={nearby.slug}>
                        <Link
                          href={`/areas-served/${nearby.slug}`}
                          className="text-gray-600 hover:text-navy text-sm flex items-center gap-2 transition-colors"
                        >
                          <svg
                            className="w-4 h-4 text-gold"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {nearby.name}, OH
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/areas-served"
                    className="text-gold font-semibold text-sm mt-4 inline-block hover:underline"
                  >
                    View All Areas →
                  </Link>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-navy rounded-lg p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Need Help?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Our paving experts are here to answer your questions about
                  projects in {area.name}.
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
        </div>
      </section>
    </>
  );
}
