import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about asphalt paving services, costs, timelines, and maintenance from All State Paving in Central Ohio.",
};

const faqs = [
  {
    q: "How long has All State Paving been in business?",
    a: "All State Paving is a family-owned and operated company that has been serving Central Ohio since 1979 — that's over 40 years of trusted paving expertise.",
  },
  {
    q: "What areas do you serve?",
    a: "We proudly serve Delaware, Sunbury, London, Marion, Columbus, Westerville, Powell, Dublin, Marysville, Mount Vernon, and surrounding communities across Central Ohio.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes! We provide free, no-obligation estimates for all paving projects. Contact us to schedule your consultation.",
  },
  {
    q: "What types of paving services do you offer?",
    a: "We offer a full range of services including asphalt paving, commercial paving, residential paving, driveway paving, parking lot paving, farm lane paving, private roads, and asphalt repair.",
  },
  {
    q: "How long does a typical paving project take?",
    a: "Project timelines vary depending on size and scope. A residential driveway may take 1-2 days, while larger commercial projects can take a week or more. We'll provide a detailed timeline with your estimate.",
  },
  {
    q: "What is the best time of year to pave?",
    a: "The ideal paving season in Ohio runs from late spring through early fall when temperatures are consistently above 50°F. However, we can work on projects as conditions allow throughout the season.",
  },
  {
    q: "How do I maintain my new asphalt?",
    a: "We recommend seal coating your asphalt every 2-3 years, keeping the surface clean, filling cracks promptly, and avoiding heavy loads during the first few days after installation.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, All State Paving is fully licensed and insured. We carry comprehensive liability insurance and workers' compensation coverage for your protection.",
  },
  {
    q: "What makes All State Paving different from other companies?",
    a: "Our 40+ years of family-owned experience, commitment to quality materials, transparent pricing, and dedication to customer satisfaction set us apart. We treat every project as if it were our own property.",
  },
  {
    q: "Do you handle both residential and commercial projects?",
    a: "Absolutely! We have extensive experience with projects of all sizes, from residential driveways and walkways to large commercial parking lots and industrial surfaces.",
  },
];

export default function FAQPage() {
  return (
    <>
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
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3.5 rounded transition-colors"
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
