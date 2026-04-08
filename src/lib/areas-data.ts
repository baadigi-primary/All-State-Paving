export interface AreaData {
  slug: string;
  name: string;
  county: string;
  headline: string;
  intro: string;
  services: string[];
  nearbyAreas: string[];
}

export const AREAS: AreaData[] = [
  {
    slug: "delaware-oh",
    name: "Delaware",
    county: "Delaware County",
    headline: "Professional Asphalt Paving in Delaware, OH",
    intro: `All State Paving has called Delaware home since 1979, and we take a lot of pride in that. As a family-owned company headquartered right here in Delaware County, we know this city inside and out — from the tree-lined streets near Ohio Wesleyan University to the growing subdivisions along US-23 and the commercial corridors on Sandusky Street.\n\nOver the past 40+ years, we've paved driveways in Woodland Hills and The Reserves, resurfaced parking lots for businesses downtown, and maintained private roads throughout the surrounding townships. Whether you're a homeowner on the east side looking to replace a cracked driveway or a business owner near the fairgrounds who needs a parking lot that can handle heavy traffic, we're the crew that shows up on time and does the job right.\n\nDelaware is growing fast, and we've grown right alongside it. From new residential developments to commercial build-outs, our team handles projects of every size with the same attention to detail we've been known for since day one.`,
    services: [
      "asphalt-paving",
      "driveway-paving-services",
      "commercial-paving-services",
      "parking-lot-paving-services",
      "sealcoating-services",
    ],
    nearbyAreas: ["Sunbury", "Powell", "Marion"],
  },
  {
    slug: "sunbury-oh",
    name: "Sunbury",
    county: "Delaware County",
    headline: "Trusted Asphalt Paving in Sunbury, OH",
    intro: `Sunbury has exploded with growth over the last decade, and All State Paving has been right there keeping up with the demand. New neighborhoods are popping up across Big Walnut territory, and every one of those homes needs a driveway that's built to last through Ohio winters. That's what we do — and we've been doing it for over 40 years.\n\nAs a family-owned paving company based just up the road in Delaware, we've watched Sunbury transform from a quiet village into one of the fastest-growing communities in Central Ohio. We've paved driveways in Bluffs at Sunbury, Rattlesnake Ridge, and dozens of other developments. We also handle the residential sealcoating and maintenance that keeps those surfaces looking sharp year after year.\n\nWhether you're building new or maintaining what you've got, our crew brings decades of experience to every job in Sunbury. From private roads serving rural properties east of town to fresh asphalt for commercial projects along SR-3, All State Paving delivers reliable results you can count on.`,
    services: [
      "asphalt-paving",
      "residential-paving-services",
      "driveway-paving-services",
      "sealcoating-services",
      "private-roads-paving-services",
    ],
    nearbyAreas: ["Delaware", "Westerville", "Mount Vernon"],
  },
  {
    slug: "london-oh",
    name: "London",
    county: "Madison County",
    headline: "Reliable Asphalt Paving in London, OH",
    intro: `London and Madison County have a character all their own — wide open farmland, tight-knit neighborhoods, and hardworking people who appreciate a job done right. All State Paving has been serving this community for over 40 years, and we understand what property owners out here need: durable asphalt that holds up to heavy equipment, changing seasons, and everyday use.\n\nAs the Madison County seat, London has a mix of residential streets, commercial properties along US-42 and Main Street, and plenty of rural acreage that depends on well-maintained farm lanes and private roads. We handle all of it. From repaving driveways in town to laying new asphalt on farm lanes west of the county, our family-owned crew brings the same quality whether it's a small residential job or a large commercial project.\n\nIf you've been putting off that driveway repair or your farm lane is turning into a mud pit every spring, give us a call. We've been the go-to paving contractor for Central Ohio's rural communities since 1979, and London is no exception.`,
    services: [
      "asphalt-paving",
      "farm-lane-paving-services",
      "driveway-paving-services",
      "private-roads-paving-services",
      "asphalt-repair-services",
    ],
    nearbyAreas: ["Columbus", "Dublin", "Marysville"],
  },
  {
    slug: "marion-oh",
    name: "Marion",
    county: "Marion County",
    headline: "Experienced Asphalt Paving in Marion, OH",
    intro: `Marion has a proud industrial heritage, and All State Paving respects that — we've been a working family-owned business ourselves for over 40 years. From the commercial properties along Marion-Mount Gilead Road to the residential neighborhoods near Harding High School and the historic district downtown, we've laid and maintained asphalt across this city for decades.\n\nMarion's mix of older commercial lots and established residential areas means there's always pavement that needs attention. Parking lots at shopping centers and industrial facilities take a beating, and driveways in neighborhoods throughout the city crack and settle over time. Our crew handles everything from full-depth paving to targeted repairs and sealcoating that extends the life of your existing surfaces.\n\nWhether you're a business owner on Delaware Avenue who needs a parking lot that makes a good impression, or a homeowner on the south side looking for a quality driveway replacement, All State Paving has the experience and equipment to get it done. We've been making the drive north from our Delaware headquarters since 1979 — Marion is part of our home turf.`,
    services: [
      "asphalt-paving",
      "commercial-paving-services",
      "parking-lot-paving-services",
      "asphalt-repair-services",
      "sealcoating-services",
    ],
    nearbyAreas: ["Delaware", "Marysville", "Mount Vernon"],
  },
  {
    slug: "columbus-oh",
    name: "Columbus",
    county: "Franklin County",
    headline: "Commercial Asphalt Paving in Columbus, OH",
    intro: `Columbus is Central Ohio's economic engine, and All State Paving has been serving the capital city's paving needs for over 40 years. From sprawling parking lots in Polaris and Easton to commercial properties along High Street and Broad Street, our family-owned company brings the reliability and craftsmanship that Columbus businesses demand.\n\nIn a city this size, first impressions matter. A well-maintained parking lot tells your customers you care about the details. Cracked, faded asphalt says the opposite. That's why property managers, retail centers, office parks, and industrial facilities across Columbus count on All State Paving for new installations, resurfacing, sealcoating, and professional line striping that keeps traffic flowing safely.\n\nWe also serve Columbus homeowners — especially in neighborhoods on the north side closer to our Delaware headquarters. Whether you need a new driveway in Clintonville, repairs in Worthington, or a full commercial lot in the Crosswoods business district, our crew has the equipment and experience to handle it. We've been doing this since 1979, and Columbus has always been a big part of our work.`,
    services: [
      "commercial-paving-services",
      "parking-lot-paving-services",
      "line-striping-services",
      "sealcoating-services",
      "asphalt-repair-services",
    ],
    nearbyAreas: ["Westerville", "Dublin", "Powell"],
  },
  {
    slug: "westerville-oh",
    name: "Westerville",
    county: "Franklin County",
    headline: "Quality Asphalt Paving in Westerville, OH",
    intro: `Westerville is one of those communities where people take pride in their properties — and All State Paving has been helping them do exactly that for over 40 years. From the established neighborhoods near Otterbein University and Uptown Westerville to the newer developments along Polaris Parkway, we've paved driveways and parking lots across this city for decades.\n\nAs a family-owned company based in nearby Delaware, Westerville is right in our backyard. We know the neighborhoods — Huber Village, Blendon Woods, Genoa Township — and we know what homeowners here expect: clean work, honest pricing, and asphalt that lasts. Our residential services include driveway paving, repairs, and sealcoating that protects your investment against Ohio's freeze-thaw cycles.\n\nWesterville's commercial side keeps us busy too. Retail centers, churches, office buildings, and HOA communities all need parking lots and driveways that look professional and hold up to daily traffic. All State Paving delivers on both counts. We've been earning the trust of Central Ohio property owners since 1979, and Westerville is one of the communities we're proudest to serve.`,
    services: [
      "asphalt-paving",
      "residential-paving-services",
      "driveway-paving-services",
      "parking-lot-paving-services",
      "sealcoating-services",
    ],
    nearbyAreas: ["Columbus", "Sunbury", "Powell"],
  },
  {
    slug: "powell-oh",
    name: "Powell",
    county: "Delaware County",
    headline: "Premium Asphalt Paving in Powell, OH",
    intro: `Powell homeowners invest in their properties, and they expect their paving contractor to match that standard. All State Paving has been delivering top-quality asphalt work in Powell and Liberty Township for over 40 years — and as a family-owned company headquartered right here in Delaware County, this is our home territory.\n\nFrom the upscale neighborhoods along Sawmill Parkway to the newer developments in Olentangy schools district, Powell driveways need to look great and hold up for years. Our crew specializes in clean, precision driveway installations that complement the curb appeal Powell homeowners have worked hard to build. We also provide sealcoating and repair services that keep existing driveways in top condition season after season.\n\nOn the commercial side, Powell's growth along Liberty Road and the US-23 corridor has brought a wave of new retail, office, and mixed-use developments that need professional parking lot paving and ongoing maintenance. All State Paving handles these projects from start to finish — grading, paving, sealcoating, and striping. We've been doing this since 1979, and Powell property owners keep calling us back because we deliver every time.`,
    services: [
      "driveway-paving-services",
      "residential-paving-services",
      "sealcoating-services",
      "parking-lot-paving-services",
      "line-striping-services",
    ],
    nearbyAreas: ["Delaware", "Dublin", "Westerville"],
  },
  {
    slug: "dublin-oh",
    name: "Dublin",
    county: "Franklin County",
    headline: "Expert Asphalt Paving in Dublin, OH",
    intro: `Dublin sets a high bar, and All State Paving meets it. From the corporate campuses along Frantz Road and Emerald Parkway to the residential streets of Muirfield and Ballantrae, this city demands paving work that's done right — precise, durable, and professional. We've been delivering exactly that across Central Ohio for over 40 years.\n\nAs one of Columbus's premier suburbs, Dublin attracts major corporate headquarters, upscale retail at Bridge Park and the Dublin Village Center, and established neighborhoods that take maintenance seriously. Our commercial paving services keep business properties looking sharp with new installations, overlays, sealcoating, and line striping. For Dublin homeowners, we provide driveway paving and repair services that protect your investment and boost your curb appeal.\n\nAll State Paving is a family-owned company based in Delaware — just a short drive north on US-33. Dublin has been part of our service area since we started in 1979, and many of the commercial properties and driveways we paved years ago are still in great shape because we did the job right the first time. That's the kind of work we're known for.`,
    services: [
      "commercial-paving-services",
      "parking-lot-paving-services",
      "driveway-paving-services",
      "sealcoating-services",
      "line-striping-services",
    ],
    nearbyAreas: ["Powell", "Columbus", "London"],
  },
  {
    slug: "marysville-oh",
    name: "Marysville",
    county: "Union County",
    headline: "Dependable Asphalt Paving in Marysville, OH",
    intro: `Marysville has grown steadily thanks to Honda and the economic activity it brings to Union County, and All State Paving has been part of that growth story. For over 40 years, our family-owned company has served Marysville homeowners and businesses with reliable asphalt paving, repair, and maintenance — the kind of work that holds up to Ohio weather and heavy daily use.\n\nFrom residential driveways in established neighborhoods near Uptown Marysville to commercial parking lots along US-33 and the industrial properties scattered throughout the county, we handle it all. Marysville's mix of new residential development and long-standing commercial areas means there's always demand for both fresh paving and smart maintenance of existing surfaces.\n\nWe also serve the rural properties surrounding Marysville — farm lanes, private roads, and long residential driveways that need asphalt tough enough for trucks and equipment. All State Paving is based in Delaware, just east on US-36, so getting a crew to your Marysville job site is never an issue. We've been serving this area since 1979 and we plan to keep at it.`,
    services: [
      "asphalt-paving",
      "driveway-paving-services",
      "commercial-paving-services",
      "farm-lane-paving-services",
      "private-roads-paving-services",
    ],
    nearbyAreas: ["Delaware", "London", "Marion"],
  },
  {
    slug: "mount-vernon-oh",
    name: "Mount Vernon",
    county: "Knox County",
    headline: "Trusted Asphalt Paving in Mount Vernon, OH",
    intro: `Mount Vernon combines small-town character with real community pride, and All State Paving has been honored to serve Knox County for over 40 years. From the historic downtown square to the residential streets radiating out from the city center, Mount Vernon property owners count on us for asphalt work that's built to last.\n\nAs the Knox County seat, Mount Vernon has a healthy mix of commercial properties along Coshocton Avenue and Upper Gilchrist Road, established residential neighborhoods, and plenty of rural acreage with private roads and farm lanes that need dependable surfaces. Our family-owned crew handles all of it — new driveway installations, parking lot paving for local businesses, farm lane construction, and repair work that extends the life of your existing asphalt.\n\nMount Vernon sits east of our Delaware headquarters, and we've been making that drive since 1979. Whether you're a homeowner near Mount Vernon Nazarene University looking for a fresh driveway, a business owner downtown who needs parking lot repairs, or a landowner out in the townships who wants a proper farm lane, All State Paving has the experience and equipment to deliver.`,
    services: [
      "asphalt-paving",
      "driveway-paving-services",
      "farm-lane-paving-services",
      "private-roads-paving-services",
      "asphalt-repair-services",
    ],
    nearbyAreas: ["Delaware", "Sunbury", "Marion"],
  },
];
