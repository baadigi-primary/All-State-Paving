import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact All State Paving for a free estimate on your asphalt paving project. Call 1-800-568-9954 or fill out our online form.",
};

export default function ContactPage() {
  return (
    <>
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
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm">Delaware, OH 43015</p>
                </div>
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
