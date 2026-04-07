import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, COMPANY } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";

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

  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
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
              <img
                src={SERVICE_IMAGES[service.slug]}
                alt={service.title}
                className="w-full h-80 object-cover rounded-lg mb-8"
              />
              <h2 className="text-3xl font-black text-navy mb-4">
                {service.title} in Central Ohio
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At All State Paving, we bring over 40 years of experience to
                every {service.title.toLowerCase()} project. Our team of skilled
                professionals uses state-of-the-art equipment and premium
                materials to ensure lasting results that exceed your
                expectations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need new installation, repair, or maintenance, we
                have the expertise to handle projects of any size. We proudly
                serve Delaware, Sunbury, London, Marion, and all of Central Ohio.
              </p>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-navy mb-4">
                  Why Choose Our {service.title} Services?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Over 40 years of industry experience",
                    "Family-owned and operated since 1979",
                    "Free, no-obligation estimates",
                    "Premium materials and state-of-the-art equipment",
                    "On-time completion and transparent pricing",
                    "Fully licensed and insured",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-300 mb-6">
                  Call us today for a free estimate on your{" "}
                  {service.title.toLowerCase()} project.
                </p>
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="inline-block bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 rounded transition-colors"
                >
                  CALL {COMPANY.phone}
                </a>
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
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
