import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse our portfolio of completed asphalt paving projects across Central Ohio — driveways, parking lots, commercial paving, and more.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Project Gallery"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
              Our <span className="section-heading">Work</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent paving projects across Central
              Ohio. Every project showcases our commitment to quality and
              craftsmanship.
            </p>
          </div>

          <GalleryGrid />
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-gray-300 mb-8">
            Let us transform your property with professional asphalt paving.
            Contact us for a free estimate.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3.5 rounded transition-colors"
          >
            GET A FREE QUOTE
          </Link>
        </div>
      </section>
    </>
  );
}
