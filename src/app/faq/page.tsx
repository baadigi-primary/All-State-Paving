import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SITE_URL } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import FAQAccordion from "./FAQAccordion";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Asphalt Paving FAQ | All State Paving Central Ohio",
  description:
    "Answers to common questions about asphalt paving costs, timelines, maintenance, and repair in Central Ohio. Get a free estimate today.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

const faqs = [
  {
    q: "How long has All State Paving been in business?",
    a: 'All State Paving is a family-owned and operated company that has been serving Central Ohio since 1979 — that\'s over 40 years of trusted paving expertise. <a href="/about" class="text-gold hover:underline">Learn more about our story</a>.',
  },
  {
    q: "What areas do you serve?",
    a: 'We proudly serve Delaware, Sunbury, London, Marion, Columbus, Westerville, Powell, Dublin, Marysville, Mount Vernon, and surrounding communities across Central Ohio. <a href="/areas-served" class="text-gold hover:underline">See all areas we serve</a>.',
  },
  {
    q: "Do you offer free estimates?",
    a: 'Yes! We provide free, no-obligation estimates for all paving projects. <a href="/contact" class="text-gold hover:underline">Contact us to schedule your consultation</a>.',
  },
  {
    q: "What types of paving services do you offer?",
    a: 'We offer a full range of services including <a href="/services/asphalt-paving" class="text-gold hover:underline">asphalt paving</a>, <a href="/services/commercial-paving-services" class="text-gold hover:underline">commercial paving</a>, <a href="/services/residential-paving-services" class="text-gold hover:underline">residential paving</a>, <a href="/services/driveway-paving-services" class="text-gold hover:underline">driveway paving</a>, <a href="/services/parking-lot-paving-services" class="text-gold hover:underline">parking lot paving</a>, <a href="/services/farm-lane-paving-services" class="text-gold hover:underline">farm lane paving</a>, <a href="/services/private-roads-paving-services" class="text-gold hover:underline">private roads</a>, and <a href="/services/asphalt-repair-services" class="text-gold hover:underline">asphalt repair</a>.',
  },
  {
    q: "How long does a typical paving project take?",
    a: 'Project timelines vary depending on size and scope. A <a href="/services/driveway-paving-services" class="text-gold hover:underline">residential driveway</a> may take 1-2 days, while larger <a href="/services/commercial-paving-services" class="text-gold hover:underline">commercial projects</a> can take a week or more. We\'ll provide a detailed timeline with your estimate.',
  },
  {
    q: "What is the best time of year to pave?",
    a: "The ideal paving season in Ohio runs from late spring through early fall when temperatures are consistently above 50°F. However, we can work on projects as conditions allow throughout the season.",
  },
  {
    q: "How do I maintain my new asphalt?",
    a: 'We recommend seal coating your asphalt every 2-3 years, keeping the surface clean, filling cracks promptly, and avoiding heavy loads during the first few days after installation. <a href="/blog/asphalt-maintenance-tips" class="text-gold hover:underline">Read our full maintenance guide</a>.',
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, All State Paving is fully licensed and insured. We carry comprehensive liability insurance and workers' compensation coverage for your protection.",
  },
  {
    q: "What makes All State Paving different from other companies?",
    a: 'Our 40+ years of family-owned experience, commitment to quality materials, transparent pricing, and dedication to customer satisfaction set us apart. We treat every project as if it were our own property. <a href="/about" class="text-gold hover:underline">Learn more about us</a>.',
  },
  {
    q: "Do you handle both residential and commercial projects?",
    a: 'Absolutely! We have extensive experience with projects of all sizes, from <a href="/services/residential-paving-services" class="text-gold hover:underline">residential driveways</a> and walkways to large <a href="/services/commercial-paving-services" class="text-gold hover:underline">commercial parking lots</a> and industrial surfaces.',
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        title="Frequently Asked Questions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-8">
            Our team is happy to help. Reach out and we&apos;ll get back to you
            as soon as possible.
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
