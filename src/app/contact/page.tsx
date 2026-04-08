import type { Metadata } from "next";
import { COMPANY, SITE_URL } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact All State Paving | Free Estimate in Central Ohio",
  description:
    "Get a free asphalt paving estimate in Central Ohio. Call 1-800-568-9954 or fill out our form. Response within 24 hours.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact All State Paving",
    description:
      "Request a free estimate for asphalt paving services in Central Ohio. Call 1-800-568-9954 or submit our online form.",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY.name,
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
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactPageSchema} />
      <PageHero
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-navy mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Ready to start your paving project? We&apos;d love to hear from
                  you. Reach out using any of the methods below or fill out the
                  form.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-navy rounded-lg p-3">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Our Office</h3>
                    <p className="text-gray-600 text-sm">{COMPANY.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-navy rounded-lg p-3">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Phone</h3>
                    <p className="text-gray-600 text-sm">
                      <a href={`tel:${COMPANY.phoneTel}`} className="hover:text-gold transition-colors">
                        {COMPANY.phone}
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">
                      <a href={`tel:${COMPANY.phoneAltTel}`} className="hover:text-gold transition-colors">
                        {COMPANY.phoneAlt}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-navy rounded-lg p-3">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Monday – Saturday: {COMPANY.hours.weekdays}
                    </p>
                    <p className="text-gray-600 text-sm">Sunday: {COMPANY.hours.sunday}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-navy rounded-lg p-3">
                    <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Facebook</h3>
                    <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-gold transition-colors">
                      Follow Us on Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.0!2d-83.068!3d40.2987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388a4e943c9e3b%3A0x2e3b4a0c8f1d5e7a!2s175+S+Sandusky+St%2C+Delaware%2C+OH+43015!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="All State Paving location"
                />
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-black text-navy mb-2">
                  Request a Free Quote
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours.
                </p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
