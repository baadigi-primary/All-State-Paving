export const SITE_URL = "https://www.allstatepavenow.com";

export const COMPANY = {
  name: "All State Paving",
  phone: "1-800-568-9954",
  phoneAlt: "740-892-1647",
  phoneTel: "+18005689954",
  phoneAltTel: "+17408921647",
  address: "175 South Sandusky St, Suite 398, Delaware, OH 43015",
  tagline: "Serving Delaware and Central Ohio Since 1979",
  description:
    "Your premier choice for high-quality asphalt paving services across Central Ohio. Family-owned and operated for over 40 years.",
  hours: {
    weekdays: "7:30 AM – 7:30 PM",
    saturday: "7:30 AM – 7:30 PM",
    sunday: "Closed",
  },
  areas: [
    "Delaware",
    "Sunbury",
    "London",
    "Marion",
    "Columbus",
    "Westerville",
    "Powell",
    "Dublin",
    "Marysville",
    "Mount Vernon",
  ],
  facebook: "https://www.facebook.com/AllStatePavingOhio",
} as const;

export const SERVICES = [
  {
    title: "Asphalt Paving",
    slug: "asphalt-paving",
    icon: "road",
    shortDesc:
      "Professional asphalt paving using top-notch materials for lasting results on any surface.",
    description:
      "Professional asphalt paving for driveways, roads, and lots in Central Ohio. Premium materials, 40+ years experience. Call for a free estimate.",
  },
  {
    title: "Commercial Paving",
    slug: "commercial-paving-services",
    icon: "building",
    shortDesc:
      "Large-scale paving solutions for businesses, shopping centers, and commercial properties.",
    description:
      "Commercial paving for parking lots, access roads, and business properties in Central Ohio. Durable results built for heavy traffic. Free estimates.",
  },
  {
    title: "Residential Paving",
    slug: "residential-paving-services",
    icon: "home",
    shortDesc:
      "Beautiful, durable paving solutions for homeowners across Central Ohio.",
    description:
      "Residential asphalt paving for driveways and walkways in Central Ohio. Boost curb appeal with durable, beautiful results. Get a free quote today.",
  },
  {
    title: "Asphalt Repair",
    slug: "asphalt-repair-services",
    icon: "wrench",
    shortDesc:
      "Expert repair services to restore and extend the life of your asphalt surfaces.",
    description:
      "Asphalt crack filling, pothole repair, and patching in Central Ohio. Extend your pavement's life and save on costly replacements. Free estimates.",
  },
  {
    title: "Driveway Paving",
    slug: "driveway-paving-services",
    icon: "car",
    shortDesc:
      "Custom driveway installations and resurfacing for a smooth, lasting finish.",
    description:
      "Custom driveway paving and resurfacing in Central Ohio. Premium materials, smooth finish, lasting results. Call for a free estimate.",
  },
  {
    title: "Private Roads",
    slug: "private-roads-paving-services",
    icon: "map",
    shortDesc:
      "Durable private road construction built to handle daily traffic with ease.",
    description:
      "Private road paving and maintenance in Central Ohio. Smooth, durable surfaces built to handle daily traffic. Get a free quote today.",
  },
  {
    title: "Farm Lane Paving",
    slug: "farm-lane-paving-services",
    icon: "tractor",
    shortDesc:
      "Rugged farm lane surfaces built to withstand heavy equipment and all weather.",
    description:
      "Farm lane paving in Central Ohio built for heavy equipment and all-weather use. Rugged, reliable surfaces. Call for a free estimate.",
  },
  {
    title: "Parking Lot Paving",
    slug: "parking-lot-paving-services",
    icon: "parking",
    shortDesc:
      "Professional parking lot construction with proper drainage and striping.",
    description:
      "Parking lot paving, resurfacing, sealcoating, and striping in Central Ohio. Keep your lot safe and professional. Free estimates available.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "About", href: "/about" },
  { label: "Areas Served", href: "/areas-served" },
  { label: "FAQ", href: "/faq" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
] as const;
