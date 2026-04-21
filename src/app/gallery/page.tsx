import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { COMPANY, SITE_URL } from "@/lib/constants";
import { GALLERY_ITEMS } from "@/lib/gallery-data";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Paving Project Gallery | All State Paving Central Ohio",
  description:
    "See our completed asphalt paving projects across Central Ohio — driveways, parking lots, farm lanes, and more. Quality you can see.",
  alternates: { canonical: `${SITE_URL}/gallery` },
};

export default function GalleryPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Gallery", item: `${SITE_URL}/gallery` },
    ],
  };

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "All State Paving Project Gallery",
    description:
      "Completed asphalt paving projects across Central Ohio — driveways, parking lots, farm lanes, and private roads.",
    url: `${SITE_URL}/gallery`,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: SITE_URL,
    },
    image: GALLERY_ITEMS.filter((item) => item.type === "image").map((item) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${item.src}`,
      url: `${SITE_URL}${item.src}`,
      name: item.title,
      caption: item.title,
      description: `${item.category} paving project by All State Paving: ${item.title}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={imageGallerySchema} />
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
            className="inline-block bg-red hover:bg-red-dark text-white font-bold px-8 py-3.5 rounded transition-colors"
          >
            GET A FREE QUOTE
          </Link>
        </div>
      </section>
    </>
  );
}
