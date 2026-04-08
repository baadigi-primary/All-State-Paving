"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryItem = {
  title: string;
  category: string;
  type: "image" | "video";
  src: string;
};

const galleryItems: GalleryItem[] = [
  // Images
  { title: "Driveway Finishing — Delaware", category: "Residential", type: "image", src: "/images/gallery-93058.jpg" },
  { title: "Residential Driveway — Sunbury", category: "Residential", type: "image", src: "/images/gallery-IMG_2761.jpg" },
  { title: "Parking Lot Paving — Columbus", category: "Commercial", type: "image", src: "/images/parking-lot-paving.jpg" },
  { title: "Private Road — Marion", category: "Roads", type: "image", src: "/images/gallery-IMG_2762.jpg" },
  { title: "Farm Lane Paving — Delaware County", category: "Farm", type: "image", src: "/images/gallery-IMG_2763.jpg" },
  { title: "Driveway Project — Powell", category: "Residential", type: "image", src: "/images/gallery-IMG_2818.jpg" },
  { title: "Lot Striping — Delaware", category: "Commercial", type: "image", src: "/images/lot-striping-3.jpg" },
  { title: "Rural Driveway — London", category: "Residential", type: "image", src: "/images/all-state-paving-05.jpg" },
  { title: "Driveway Crew — Westerville", category: "Residential", type: "image", src: "/images/gallery-job-5.jpg" },
  { title: "Rural Road Paving — Marion", category: "Roads", type: "image", src: "/images/all-state-paving-08.jpg" },
  { title: "Paving In Progress — Marysville", category: "Residential", type: "image", src: "/images/all-state-paving-07.jpg" },
  { title: "Parking Lot Striping — Marion", category: "Commercial", type: "image", src: "/images/lot-striping-4.jpg" },
  { title: "Farm Property Paving — Delaware County", category: "Farm", type: "image", src: "/images/all-state-paving-02.jpg" },
  { title: "Driveway Paving — Marysville", category: "Residential", type: "image", src: "/images/gallery-job-3.jpg" },
  { title: "Freshly Striped Lines — Delaware", category: "Commercial", type: "image", src: "/images/lot-striping-1.jpg" },
  { title: "Driveway Compaction — London", category: "Residential", type: "image", src: "/images/gallery-job-6.jpg" },
  { title: "Residential Walkway — Powell", category: "Residential", type: "image", src: "/images/all-state-paving-06.jpg" },
  { title: "Paving Turnaround — Sunbury", category: "Residential", type: "image", src: "/images/allstatepavenow-photo.jpg" },
  { title: "Driveway Overlay — Delaware", category: "Residential", type: "image", src: "/images/gallery-IMG_2819.jpg" },
  { title: "Driveway Approach — Delaware", category: "Residential", type: "image", src: "/images/gallery-IMG_2760.jpg" },
  { title: "Commercial Lot — Columbus", category: "Commercial", type: "image", src: "/images/gallery-image_50786049.jpg" },
  { title: "Paving Crew On Site — Marion", category: "Residential", type: "image", src: "/images/gallery-image_123650291.jpg" },
  { title: "Finished Driveway — Sunbury", category: "Residential", type: "image", src: "/images/gallery-image_50447617.jpg" },
  { title: "New Asphalt Surface — London", category: "Residential", type: "image", src: "/images/all-state-paving-03.jpg" },
  { title: "Asphalt Overlay — Powell", category: "Residential", type: "image", src: "/images/all-state-paving-04.jpg" },
  { title: "Parking Lot Resurfacing — Delaware", category: "Commercial", type: "image", src: "/images/gallery-image_50455297.jpg" },
  { title: "Commercial Paving — Marion", category: "Commercial", type: "image", src: "/images/gallery-image_50436353.jpg" },
  { title: "Driveway Extension — Marysville", category: "Residential", type: "image", src: "/images/gallery-image_50756609.jpg" },
  // Videos
  { title: "Paving In Action", category: "Residential", type: "video", src: "/videos/allstatepavenow.mp4" },
  { title: "Asphalt Compaction Process", category: "Residential", type: "video", src: "/videos/IMG_1369.mp4" },
  { title: "Roller Finishing Pass", category: "Residential", type: "video", src: "/videos/IMG_1442.mp4" },
  { title: "Crew Laying Asphalt", category: "Residential", type: "video", src: "/videos/IMG_1374.mp4" },
  { title: "Driveway Paving Complete", category: "Residential", type: "video", src: "/videos/IMG_1512-1.mp4" },
];

type Filter = "all" | "images" | "videos";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = galleryItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "images") return item.type === "image";
    return item.type === "video";
  });

  const filters: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "Images", value: "images" },
    { label: "Videos", value: "videos" },
  ];

  return (
    <>
      <div className="flex justify-center gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-5 py-2 rounded font-bold text-sm transition-colors ${
              filter === f.value
                ? "bg-gold text-navy"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <div key={i} className="group relative overflow-hidden rounded-lg shadow-sm h-72">
            {item.type === "video" ? (
              <video
                src={item.src}
                controls
                preload="metadata"
                className="w-full h-72 object-cover bg-black"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            )}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent flex items-end p-6 ${
                item.type === "video"
                  ? "opacity-0 pointer-events-none"
                  : "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              }`}
            >
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
    </>
  );
}
