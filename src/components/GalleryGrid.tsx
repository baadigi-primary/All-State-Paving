"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY_ITEMS } from "@/lib/gallery-data";

type Filter = "all" | "images" | "videos";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = GALLERY_ITEMS.filter((item) => {
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
