import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, COMPANY, SITE_URL } from "@/lib/constants";
import { SERVICE_CONTENT } from "@/lib/service-content";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";

import { SERVICE_IMAGES } from "@/lib/images";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = SERVICES.find((s) => s.slug === slug);
    if (!service) return { title: "Service Not Found" };
    return {
      title: `${service.title} Services in Central Ohio`,
      description: service.description,
      alternates: { canonical: `${SITE_URL}/services/${slug}` },
    };
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = SERVICE_CONTENT.find((c) => c.slug === slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} Services`,
    description: service.description,
    serviceType: service.title,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY.name,
      url: SITE_URL,
      telephone: COMPANY.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "175 South Sandusky St, Suite 398",
        addressLocality: "Delaware",
        addressRegion: "OH",
        postalCode: "43015",
        addressCountry: "US",
      },
    },
    areaServed: COMPANY.areas.map((area) => ({
      "@type": "City",
      name: `${area}, Ohio`,
    })),
    url: `${SITE_URL}/services/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_URL}/services/${slug}` },
    ],
  };

  // Add FAQ schema if content has FAQs
  const faqSchema = content?.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: content.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <PageHero
        title={service.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="relative h-80 rounded-lg overflow-hidden mb-8">
                <Image
                  src={SERVICE_IMAGES[service.slug]}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-3xl font-black text-navy mb-6">
                {service.title} in Central Ohio
              </h2>

              {/* Expanded hero content */}
              {content ? (
                content.heroContent.split("\n\n").map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">
                    {p}
                  </p>
                ))
              ) : (
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              )}

              {/* Benefits */}
              {content && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-navy mb-6">
                    Why Choose Our {service.title} Services?
                  </h3>
                  <div className="space-y-4">
                    {content.benefits.map((benefit) => (
                      <div
                        key={benefit.title}
                        className="bg-gray-50 rounded-lg p-6"
                      >
                        <div className="flex items-start gap-3">
                          <svg
                            className="w-6 h-6 text-gold shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            <h4 className="font-bold text-navy mb-1">
                              {benefit.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process */}
              {content && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-navy mb-6">
                    Our {service.title} Process
                  </h3>
                  <div className="space-y-6">
                    {content.process.map((step) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="bg-gold text-navy w-10 h-10 rounded-full flex items-center justify-center font-black text-lg shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-navy mb-1">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              {content && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-navy mb-6">
                    {service.title} FAQ
                  </h3>
                  <div className="space-y-4">
                    {content.faq.map((item) => (
                      <div
                        key={item.q}
                        className="border border-gray-200 rounded-lg p-6"
                      >
                        <h4 className="font-bold text-navy mb-2">{item.q}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-navy rounded-lg p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-300 mb-6">
                  Call us today for a free estimate on your{" "}
                  {service.title.toLowerCase()} project.
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
              {/* Other Services */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-navy mb-4 border-b border-gray-200 pb-3">
                  Our Services
                </h3>
                <ul className="space-y-1">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className={`block px-3 py-2 rounded text-sm transition-colors ${
                          s.slug === slug
                            ? "bg-navy text-white font-semibold"
                            : "text-gray-600 hover:bg-gray-100 hover:text-navy"
                        }`}
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote Form */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-4">
                  Get a Free Quote
                </h3>
                <QuoteForm />
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
        </div>
      </section>
    </>
  );
}
