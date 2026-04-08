import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, SITE_URL } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About All State Paving | Central Ohio Asphalt Contractor",
  description:
    "Family-owned asphalt paving company serving Central Ohio since 1979. 40+ years of quality driveways, parking lots, and roads. Meet our team.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* About Intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">
                Family-Owned &amp; Operated{" "}
                <span className="section-heading">Since 1979</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to All State Paving — your premier choice for
                high-quality asphalt paving services across Central Ohio. For
                more than 40 years, our family-owned and operated company has
                built a trusted reputation for delivering paving solutions that
                combine quality, durability, and affordability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Proudly serving Delaware, Sunbury, London, and Marion in Ohio and
                nearby areas, we take pride in being your local experts. Our team
                is dedicated to providing exceptional service and craftsmanship
                that you can depend on for years to come.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a full-service asphalt paving company, we offer a
                comprehensive range of residential and commercial services
                designed to meet your specific needs. From driveway paving and
                asphalt repair to parking lots, farm lanes, and large-scale
                commercial projects, our experienced professionals handle every
                job with care, precision, and efficiency.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/paving-work-1.jpg"
                alt="All State Paving team at work"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-6 rounded-lg shadow-xl hidden lg:block">
                <div className="text-4xl font-black mb-1">1979</div>
                <div className="text-sm font-bold">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
              Why Choose <span className="section-heading">All State Paving</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experience & Expertise",
                desc: "With over 40 years of experience, we've honed our craft to perfection, making us the premier asphalt paving company in Central Ohio.",
              },
              {
                title: "Quality Materials",
                desc: "We use only top-notch materials and state-of-the-art equipment to ensure the perfect balance of longevity and aesthetics for your surfaces.",
              },
              {
                title: "Customer First",
                desc: "We believe in open communication and personalized service, working closely with each customer to deliver results that exceed expectations.",
              },
              {
                title: "On Time & On Budget",
                desc: "Using proven techniques, our highly skilled paving contractors complete every project efficiently, on time, and within budget.",
              },
              {
                title: "Comprehensive Services",
                desc: "From driveway paving and asphalt repair to farm lanes, parking lots, and commercial paving, we handle every type of project.",
              },
              {
                title: "Local & Trusted",
                desc: "As a family-owned business, we're committed to our communities and take pride in every project we complete across Central Ohio.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 shadow-sm border-b-4 border-b-gold"
              >
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Our Mission
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            At All State Paving, we&apos;re committed to helping our communities
            look their best with smooth, long-lasting results that enhance
            appearance, safety, and value for every property we pave.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red hover:bg-red-dark text-white font-bold px-8 py-3.5 rounded transition-colors"
          >
            GET A FREE QUOTE
          </Link>
        </div>
      </section>
    </>
  );
}
