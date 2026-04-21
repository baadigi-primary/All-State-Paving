import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, SERVICES, SITE_URL } from "@/lib/constants";
import { IMG } from "@/lib/images";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const servicesItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Asphalt Paving Services Offered by All State Paving",
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

/* ── Service Icons ────────────────────────────────────── */
const serviceIcons: Record<string, React.ReactNode> = {
  road: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20H4a1 1 0 01-1-1V5a1 1 0 011-1h5M15 4h5a1 1 0 011 1v14a1 1 0 01-1 1h-5M12 4v4M12 12v2M12 18v2" />
    </svg>
  ),
  building: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  home: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  wrench: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  car: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.382L21 11M3 11v6a1 1 0 001 1h1m16-7v6a1 1 0 01-1 1h-1M3 11h18" />
    </svg>
  ),
  map: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  tractor: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  parking: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    </svg>
  ),
  shield: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  lines: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
};

/* ── Project gallery data ─────────────────────────────── */
const projects = [
  { title: "Commercial Parking Lot", category: "Commercial", img: IMG.lotStriping1 },
  { title: "Residential Driveway", category: "Residential", img: IMG.drivewayPaving },
  { title: "Private Road Paving", category: "Roads", img: IMG.privateRoadRural },
  { title: "Farm Lane Project", category: "Farm", img: IMG.farmLaneRoad },
  { title: "Parking Lot Resurfacing", category: "Commercial", img: IMG.parkingLot },
  { title: "Driveway Repair", category: "Residential", img: IMG.asphaltRepair },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={servicesItemListSchema} />
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `url('${IMG.heroMain}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Welcome to All State Paving
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-3xl mb-6">
            CENTRAL OHIO&apos;S TRUSTED
            <br />
            <span className="text-gold">ASPHALT PAVING</span> EXPERTS
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-8 leading-relaxed">
            {COMPANY.tagline}. Professional asphalt paving, repair, and
            resurfacing for residential and commercial properties.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-red hover:bg-red-dark text-white font-bold px-8 py-3.5 rounded text-sm tracking-wide transition-colors"
            >
              GET A FREE QUOTE
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-3.5 rounded text-sm tracking-wide transition-colors"
            >
              OUR SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ OUR PROMISE ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-14">
            <span className="ghost-text">PROVIDING</span>
            <h2 className="text-3xl md:text-5xl font-black text-navy">
              OUR <span className="section-heading">PROMISE</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Satisfaction",
                desc: "We put our customers first in everything we do. From your initial consultation to project completion, we ensure a seamless and satisfying experience.",
                img: IMG.pavingXxl1,
              },
              {
                title: "Affordable Prices",
                desc: "Quality paving doesn't have to break the bank. We offer competitive pricing and free estimates so you can get the best value for your investment.",
                img: IMG.pavingConstruction,
              },
              {
                title: "Right Tools & Equipment",
                desc: "We invest in state-of-the-art equipment and proven techniques to deliver superior results on every project, no matter the size or complexity.",
                img: IMG.pavingXxlHeight,
              },
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="overflow-hidden rounded-lg mb-5 relative h-56">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SPECIALIZATION / SERVICES ═══ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-14">
            <span className="ghost-text">OUR BEST</span>
            <h2 className="text-3xl md:text-5xl font-black text-navy">
              <span className="section-heading">SPECIALIZATION</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group border-b-4 border-b-gold"
              >
                <div className="text-navy mb-4 group-hover:text-gold transition-colors">
                  {serviceIcons[service.icon]}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {service.shortDesc}
                </p>
                <span className="text-navy font-semibold text-sm underline group-hover:text-gold transition-colors">
                  READ MORE
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS GALLERY ═══ */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-14">
            <span className="ghost-text ghost-text-light">OUR LATEST</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              <span className="section-heading">PROJECTS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="group relative overflow-hidden rounded-lg h-64">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded">
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold mt-2">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT / ROAD PAVING ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative mb-8">
                <span className="ghost-text">PREMIUM</span>
                <h2 className="text-3xl md:text-5xl font-black text-navy">
                  <span className="section-heading">ASPHALT</span> PAVING
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                For more than 40 years, our family-owned and operated company has
                built a trusted reputation for delivering paving solutions that
                combine quality, durability, and affordability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Proudly serving Delaware, Sunbury, London, and Marion in Ohio and
                nearby areas, we take pride in being your local experts. Our team
                is dedicated to providing exceptional service and craftsmanship
                that you can depend on for years to come.
              </p>
              <Link
                href="/about"
                className="inline-block border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-8 py-3 rounded text-sm transition-colors"
              >
                READ MORE
              </Link>
            </div>
            <div className="relative">
              <Image
                src={IMG.heroBg2}
                alt="Road paving equipment"
                width={800}
                height={600}
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-navy text-white p-6 rounded-lg shadow-xl hidden lg:block">
                <div className="text-gold text-3xl font-black mb-1">40+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-14 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-navy">
              WHY CHOOSE <span className="section-heading">ALL STATE PAVING</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏆", title: "40+ Years Experience", desc: "Family-owned since 1979, delivering excellence across Central Ohio." },
              { icon: "✅", title: "Quality Materials", desc: "We use only premium-grade asphalt and materials for long-lasting results." },
              { icon: "💰", title: "Free Estimates", desc: "Get a no-obligation quote for your project — residential or commercial." },
              { icon: "⏰", title: "On Time & Budget", desc: "We complete every project efficiently, on schedule, and within your budget." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-navy font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS / NUMBERS ═══ */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-14">
            <span className="ghost-text ghost-text-light">INTERESTING</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              <span className="section-heading">NUMBERS</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40+", label: "Years Experience" },
              { value: "2,500+", label: "Projects Completed" },
              { value: "1,800+", label: "Happy Clients" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-black text-gold mb-2 font-mono">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-14">
            <span className="ghost-text">CLIENTS</span>
            <h2 className="text-3xl md:text-5xl font-black text-navy">
              <span className="section-heading">TESTIMONIALS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mike R.",
                role: "Homeowner, Delaware",
                text: "All State Paving did an incredible job on our driveway. The team was professional, punctual, and the finished product looks amazing. Highly recommend!",
              },
              {
                name: "Sarah T.",
                role: "Business Owner, Sunbury",
                text: "We hired All State for our parking lot resurfacing and couldn't be happier. They worked around our business hours and delivered excellent results.",
              },
              {
                name: "James P.",
                role: "Property Manager, Marion",
                text: "I've used All State Paving for multiple properties over the years. Their quality and reliability are unmatched in Central Ohio. Great value for the price.",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-lg p-6">
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-l-4 border-gold pl-3">
                  <div className="font-bold text-navy">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GET A QUOTE ═══ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="relative mb-8">
                <span className="ghost-text">QUOTE</span>
                <h2 className="text-3xl md:text-5xl font-black text-navy">
                  GET A <span className="section-heading">QUOTE</span>
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ready to get started on your paving project? Fill out the form
                and we&apos;ll get back to you with a free, no-obligation
                estimate within 24 hours.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Or give us a call at{" "}
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="text-navy font-bold hover:text-gold transition-colors"
                >
                  {COMPANY.phone}
                </a>{" "}
                to speak with one of our paving experts today.
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free estimates — no obligation
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Start Your Paving Project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate. Our team is ready to help with
            all your asphalt paving needs across Central Ohio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="bg-red hover:bg-red-dark text-white font-bold px-8 py-3.5 rounded text-sm transition-colors"
            >
              CALL {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-3.5 rounded text-sm transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
