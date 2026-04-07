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
  facebook: "https://www.facebook.com/allstatepavenow",
} as const;

export const SERVICES = [
  {
    title: "Asphalt Paving",
    slug: "asphalt-paving",
    icon: "road",
    shortDesc:
      "Professional asphalt paving using top-notch materials for lasting results on any surface.",
    description:
      "Our team of skilled and experienced professionals uses only top-notch materials to ensure the perfect balance of longevity and aesthetics for your surfaces. Whether it's a commercial parking lot or a residential driveway, you can trust us to deliver superior results.",
  },
  {
    title: "Commercial Paving",
    slug: "commercial-paving-services",
    icon: "building",
    shortDesc:
      "Large-scale paving solutions for businesses, shopping centers, and commercial properties.",
    description:
      "We understand the unique demands of commercial paving projects. From parking lots to access roads, our team delivers durable, professional results that withstand heavy traffic and harsh weather conditions.",
  },
  {
    title: "Residential Paving",
    slug: "residential-paving-services",
    icon: "home",
    shortDesc:
      "Beautiful, durable paving solutions for homeowners across Central Ohio.",
    description:
      "Transform your home's curb appeal with our residential paving services. We specialize in driveways, walkways, and other residential surfaces that combine beauty with durability.",
  },
  {
    title: "Asphalt Repair",
    slug: "asphalt-repair-services",
    icon: "wrench",
    shortDesc:
      "Expert repair services to restore and extend the life of your asphalt surfaces.",
    description:
      "Don't let cracks and potholes compromise your pavement. Our expert repair services address damage quickly and effectively, extending the life of your asphalt and saving you money on costly replacements.",
  },
  {
    title: "Driveway Paving",
    slug: "driveway-paving-services",
    icon: "car",
    shortDesc:
      "Custom driveway installations and resurfacing for a smooth, lasting finish.",
    description:
      "A well-paved driveway enhances your property's appearance and value. We provide custom driveway solutions tailored to your needs, using premium materials and proven techniques for a smooth, lasting finish.",
  },
  {
    title: "Private Roads",
    slug: "private-roads-paving-services",
    icon: "map",
    shortDesc:
      "Durable private road construction built to handle daily traffic with ease.",
    description:
      "Private roads require the same quality and attention as public ones. We build and maintain private roads that are smooth, durable, and designed to handle daily traffic with ease.",
  },
  {
    title: "Farm Lane Paving",
    slug: "farm-lane-paving-services",
    icon: "tractor",
    shortDesc:
      "Rugged farm lane surfaces built to withstand heavy equipment and all weather.",
    description:
      "Farm lanes need to withstand heavy equipment and all weather conditions. Our farm lane paving services deliver rugged, reliable surfaces that keep your agricultural operations running smoothly.",
  },
  {
    title: "Parking Lot Paving",
    slug: "parking-lot-paving-services",
    icon: "parking",
    shortDesc:
      "Professional parking lot construction with proper drainage and striping.",
    description:
      "A well-maintained parking lot is essential for any business. We provide comprehensive parking lot services including new construction, resurfacing, seal coating, and striping to keep your lot safe and professional.",
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
