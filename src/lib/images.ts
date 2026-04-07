// Central image mapping for the entire site
// All images sourced from allstatepavenow.com

export const IMG = {
  // Logo
  logo: "/images/All State Paving logo.png",

  // Hero / Banners
  heroMain: "/images/hero-main.jpg",
  heroBg2: "/images/hero-bg-2.jpg",
  asphaltRepairBg: "/images/asphalt-repair-bg.jpg",

  // Service-specific
  asphaltPaving: "/images/asphalt-paving-blog.jpg",
  commercialPaving: "/images/commercial-paving.webp",
  residentialPaving: "/images/residential-paving.jpeg",
  asphaltRepair: "/images/asphalt-repair-detail.jpg",
  drivewayPaving: "/images/driveway-1.jpg",
  privateRoad: "/images/private-road.jpg",
  farmLane: "/images/farm-lane-paving.jpg",
  parkingLot: "/images/parking-lot.jpg",

  // Additional service/project images
  asphaltSealing: "/images/asphalt-sealing.jpg",
  asphaltDriveway: "/images/asphalt-driveway.webp",
  parkingLotPaving: "/images/parking-lot-paving.jpg",
  parkingLotMonthly: "/images/parking-lot-monthly.jpg",
  farmLaneRoad: "/images/farm-lane-road.jpg",
  privateRoadRural: "/images/private-road-rural.jpg",
  paverDriveway: "/images/paver-driveway.jpg",
  pavingWork1: "/images/paving-work-1.jpg",
  pavingConstruction: "/images/paving-construction.jpg",
  residentialXxl: "/images/residential-xxl.webp",
  pavingXxl1: "/images/paving-xxl-1.webp",
  pavingXxlHeight: "/images/paving-xxl-height.webp",
  lotStriping1: "/images/lot-striping-1.jpg",
  lotStriping3: "/images/lot-striping-3.jpg",
  lotStriping4: "/images/lot-striping-4.jpg",
  lotStriping5: "/images/lot-striping-5.jpg",

  // Gallery project photos
  gallery: {
    img2760: "/images/gallery-IMG_2760.jpg",
    img2761: "/images/gallery-IMG_2761.jpg",
    img2762: "/images/gallery-IMG_2762.jpg",
    img2763: "/images/gallery-IMG_2763.jpg",
    img2818: "/images/gallery-IMG_2818.jpg",
    img2819: "/images/gallery-IMG_2819.jpg",
    job1: "/images/gallery-job-1.jpg",
    job2: "/images/gallery-job-2.jpg",
    job3: "/images/gallery-job-3.jpg",
    job4: "/images/gallery-job-4.jpg",
    job5: "/images/gallery-job-5.jpg",
    job6: "/images/gallery-job-6.jpg",
    photo: "/images/allstatepavenow-photo.jpg",
    asp02: "/images/all-state-paving-02.jpg",
    asp03: "/images/all-state-paving-03.jpg",
    asp04: "/images/all-state-paving-04.jpg",
    asp05: "/images/all-state-paving-05.jpg",
    asp06: "/images/all-state-paving-06.jpg",
    asp07: "/images/all-state-paving-07.jpg",
    asp08: "/images/all-state-paving-08.jpg",
    paving93058: "/images/gallery-93058.jpg",
  },
} as const;

// Map service slugs to their primary images
export const SERVICE_IMAGES: Record<string, string> = {
  "asphalt-paving": IMG.asphaltPaving,
  "commercial-paving-services": IMG.commercialPaving,
  "residential-paving-services": IMG.residentialPaving,
  "asphalt-repair-services": IMG.asphaltRepair,
  "driveway-paving-services": IMG.drivewayPaving,
  "private-roads-paving-services": IMG.privateRoad,
  "farm-lane-paving-services": IMG.farmLane,
  "parking-lot-paving-services": IMG.parkingLot,
};
