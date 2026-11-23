export const SITE_URL = "https://www.allstatepavenow.com";

export const COMPANY = {
  name: "All State Paving",
  phone: "1-800-568-9954",
  phoneAlt: "352-581-5301",
  phoneTel: "+18005689954",
  phoneAltTel: "+13525815301",
  address: "2603 NW 13th St, Gainesville, FL 32609",
  street: "2603 NW 13th St",
  city: "Gainesville",
  region: "FL",
  postalCode: "32609",
  tagline: "Serving Gainesville and surrounding areas for 25 years",
  description:
    "Your premier choice for high-quality asphalt paving in Gainesville, Florida and surrounding areas. Family-owned and operated for over 40 years.",
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
  gainesville: {
    address: "2603 NW 13th St, Gainesville, FL 32609",
    street: "2603 NW 13th St",
    city: "Gainesville",
    region: "FL",
    postalCode: "32609",
    phone: "352-581-5301",
    phoneTel: "+13525815301",
    tagline: "Serving Gainesville and surrounding areas for 25 years",
    href: "/areas-served/gainesville-fl",
  },
} as const;

export const SERVICES = [
  {
    title: "Asphalt Paving",
    slug: "asphalt-paving",
    icon: "road",
    shortDesc:
      "Professional asphalt paving using top-notch materials for lasting results on any surface.",
    description:
      "Professional asphalt paving for driveways, roads, and lots in Gainesville, FL. Premium materials, 40+ years experience. Call for a free estimate.",
  },
  {
    title: "Commercial Paving",
    slug: "commercial-paving-services",
    icon: "building",
    shortDesc:
      "Large-scale paving solutions for businesses, shopping centers, and commercial properties.",
    description:
      "Commercial paving for parking lots, access roads, and business properties in Gainesville, FL. Durable results built for heavy traffic. Free estimates.",
  },
  {
    title: "Residential Paving",
    slug: "residential-paving-services",
    icon: "home",
    shortDesc:
      "Beautiful, durable paving solutions for homeowners in Gainesville, FL.",
    description:
      "Residential asphalt paving for driveways and walkways in Gainesville, FL. Boost curb appeal with durable, beautiful results. Get a free quote today.",
  },
  {
    title: "Asphalt Repair",
    slug: "asphalt-repair-services",
    icon: "wrench",
    shortDesc:
      "Expert repair services to restore and extend the life of your asphalt surfaces.",
    description:
      "Most cracked or potholed asphalt can be repaired instead of replaced when the base is sound — early repair saves Gainesville, FL property owners from costly full replacement. Crack filling, patching, and pothole repair with free on-site estimates.",
  },
  {
    title: "Driveway Paving",
    slug: "driveway-paving-services",
    icon: "car",
    shortDesc:
      "Custom driveway installations and resurfacing for a smooth, lasting finish.",
    description:
      "Custom driveway paving and resurfacing in Gainesville, FL. Premium materials, smooth finish, lasting results. Call for a free estimate.",
  },
  {
    title: "Private Roads",
    slug: "private-roads-paving-services",
    icon: "map",
    shortDesc:
      "Durable private road construction built to handle daily traffic with ease.",
    description:
      "Private road paving is the owner's responsibility, and asphalt handles daily traffic well. Durable private road construction and maintenance in Gainesville, FL and surrounding areas with free on-site quotes.",
  },
  {
    title: "Farm Lane Paving",
    slug: "farm-lane-paving-services",
    icon: "tractor",
    shortDesc:
      "Rugged farm lane surfaces built to withstand heavy equipment and all weather.",
    description:
      "Farm lane paving in Gainesville, FL built for heavy equipment and all-weather use. Rugged, reliable surfaces. Call for a free estimate.",
  },
  {
    title: "Parking Lot Paving",
    slug: "parking-lot-paving-services",
    icon: "parking",
    shortDesc:
      "Professional parking lot construction with proper drainage and striping.",
    // ponytail: metaTitle override lets this one page target "parking lot paving ohio" (pos ~11, 118 impr, 0 clicks)
    // without touching the generic title template every other service page still uses.
    metaTitle: "Need Parking Lot Paving in Gainesville, FL? Here's What to Expect",
    description:
      "Need parking lot paving in Gainesville, FL? All State Paving builds, resurfaces, and stripes commercial lots in Gainesville and surrounding areas with proper drainage and code-compliant layouts. In business since 1979 — request a free estimate.",
  },
  {
    title: "Sealcoating",
    slug: "sealcoating-services",
    icon: "shield",
    shortDesc:
      "Protect your asphalt with professional sealcoating that extends pavement life by years.",
    description:
      "Sealcoating seals out water, UV, and oil to keep asphalt flexible. The lowest-cost way to extend driveway and parking lot life in Gainesville, FL. Free on-site estimates.",
  },
  {
    title: "Line Striping",
    slug: "line-striping-services",
    icon: "lines",
    shortDesc:
      "Crisp, visible parking lot striping for safety, compliance, and a professional look.",
    // ponytail: metaTitle override for this page only (1762 impr/28d, 1 click — CTR 0.06%,
    // the worst on the site) targeting "parking lot striping" + area queries.
    metaTitle: "Need Parking Lot Striping in Gainesville, FL?",
    description:
      "Need parking lot striping in Gainesville, FL? All State Paving delivers ADA-compliant striping and pavement marking in Gainesville and surrounding areas. Free estimates, in business since 1979.",
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
