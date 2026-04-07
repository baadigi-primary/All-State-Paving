import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse our portfolio of completed asphalt paving projects across Central Ohio — driveways, parking lots, commercial paving, and more.",
};

const galleryItems = [
  {
    title: "Commercial Parking Lot — Delaware",
    category: "Commercial",
    img: "/images/gallery-IMG_2760.jpg",
  },
  {
    title: "Residential Driveway — Sunbury",
    category: "Residential",
    img: "/images/gallery-IMG_2761.jpg",
  },
  {
    title: "Private Road — Marion",
    category: "Roads",
    img: "/images/gallery-IMG_2762.jpg",
  },
  {
    title: "Farm Lane — Delaware County",
    category: "Farm",
    img: "/images/gallery-IMG_2763.jpg",
  },
  {
    title: "Paving Project — London",
    category: "Commercial",
    img: "/images/gallery-IMG_2818.jpg",
  },
  {
    title: "Driveway Project — Powell",
    category: "Residential",
    img: "/images/gallery-IMG_2819.jpg",
  },
  {
    title: "Asphalt Work — Columbus",
    category: "Commercial",
    img: "/images/gallery-job-1.jpg",
  },
  {
    title: "Road Paving — Westerville",
    category: "Roads",
    img: "/images/gallery-job-2.jpg",
  },
  {
    title: "Parking Lot — Marysville",
    category: "Commercial",
    img: "/images/gallery-job-3.jpg",
  },
  {
    title: "Lot Striping — Delaware",
    category: "Commercial",
    img: "/images/all-state-paving-02.jpg",
  },
  {
    title: "Residential Paving — Sunbury",
    category: "Residential",
    img: "/images/all-state-paving-03.jpg",
  },
  {
    title: "Commercial Project — Marion",
    category: "Commercial",
    img: "/images/all-state-paving-04.jpg",
  },
];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg shadow-sm">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded mb-2 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
