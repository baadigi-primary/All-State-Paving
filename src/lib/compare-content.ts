// Versus / comparison pages ("X vs Y") — built for AI search + featured snippets.
// House format: self-contained answer passage first, comparison table, per-factor
// question sections, decision buckets, FAQ. NO PRICING (client rule) — cost is only
// ever relative ("lower upfront cost"), never a figure. Numbers used are industry-
// standard lifespan ranges only, never fabricated or client-specific.

export interface CompareFactor {
  /** Question-style H2 — each answer must stand alone (quotable by AI). */
  q: string;
  a: string;
}

export interface ComparePage {
  slug: string;
  optionA: string;
  optionB: string;
  /** H1 */
  title: string;
  metaTitle: string;
  /** 3-part rule: question+answer -> who/where -> qualifier. No pricing. */
  metaDescription: string;
  /** ~40-60 word self-contained verdict. Leads with the verbatim search phrase. */
  answerPassage: string;
  /** Kept out of snippets via data-nosnippet. */
  trustLine: string;
  lastUpdated: string;
  experienceLine: string;
  comparisonTable: { columns: string[]; rows: string[][] };
  factors: CompareFactor[];
  decision: {
    pickA: { heading: string; bullets: string[] };
    pickB: { heading: string; bullets: string[] };
    bottomLine: string;
  };
  relatedServices: { title: string; slug: string }[];
  faq: CompareFactor[];
}

export const COMPARE_PAGES: ComparePage[] = [
  {
    slug: "asphalt-vs-concrete-driveway",
    optionA: "Asphalt",
    optionB: "Concrete",
    title: "Asphalt vs Concrete Driveway",
    metaTitle: "Asphalt vs Concrete Driveway: Which Lasts Longer? | Central Ohio",
    metaDescription:
      "Asphalt driveways cost less upfront and perform better in freeze-thaw climates, while concrete lasts longer and needs less regular sealing. Compare lifespan, maintenance, and cold-weather performance for Central Ohio homeowners choosing a driveway.",
    answerPassage:
      "In the asphalt vs concrete driveway decision, choose an asphalt driveway for a lower upfront cost and better performance in freeze-thaw climates, and choose a concrete driveway for a longer lifespan and less frequent sealing. Asphalt flexes with cold-weather ground movement, while concrete lasts longer but cracks more easily in hard Ohio winters.",
    trustLine:
      "Serving Delaware & Central Ohio since 1979 · Licensed & insured · Free driveway estimates",
    lastUpdated: "July 2026",
    experienceLine:
      "Our crews have installed and repaired asphalt and concrete driveways across Delaware and Central Ohio for more than 40 years.",
    comparisonTable: {
      columns: ["Factor", "Asphalt Driveway", "Concrete Driveway"],
      rows: [
        ["Upfront cost", "Lower", "Higher"],
        ["Typical lifespan", "20–30 years with upkeep", "30–40 years"],
        ["Best climate", "Cold / freeze-thaw", "Mild / hot"],
        ["Maintenance", "Reseal every few years", "Seals rarely; cracks cost more to fix"],
        ["Repairs", "Easy, blends in", "Harder, patches show"],
        ["Ready to use", "About 1–2 days", "About 5–7 days"],
        ["Appearance", "Classic black", "Colors, stamping, finishes"],
      ],
    },
    factors: [
      {
        q: "Is asphalt or concrete cheaper for a driveway?",
        a: "Asphalt is almost always the lower upfront cost and you can usually drive on it within a day or two, while concrete costs more to install and needs about a week to cure. Exact cost depends on your driveway size and site conditions, so the honest answer is to get a free on-site quote rather than trust a flat online figure.",
      },
      {
        q: "Which driveway lasts longer, asphalt or concrete?",
        a: "Concrete lasts longer on paper — commonly 30–40 years versus 20–30 for asphalt — but only when the climate cooperates. In hard freeze-thaw winters like Central Ohio, concrete is more prone to cracking and salt scaling, so the real-world gap is smaller than the numbers suggest.",
      },
      {
        q: "Which handles Ohio winters better?",
        a: "Asphalt. Its flexible surface expands and contracts with freeze-thaw cycles instead of cracking, and dark asphalt absorbs heat to melt snow and ice faster. Concrete is more vulnerable to cracking and de-icing salt damage in cold climates, which is why asphalt is the more common driveway choice across Central Ohio.",
      },
      {
        q: "Which driveway needs more maintenance?",
        a: "Asphalt needs resealing every few years to prevent cracking and fading, but repairs are inexpensive and blend in almost invisibly. Concrete needs sealing far less often, but when it cracks or scales the repairs cost more and rarely match. In short: asphalt is more routine upkeep, concrete is lower upkeep but higher-stakes when something goes wrong.",
      },
      {
        q: "Can you put asphalt over a concrete driveway?",
        a: "Sometimes. Asphalt can be overlaid on sound concrete, but existing cracks and joints can eventually 'reflect' up through the new asphalt. A contractor should inspect the base first to confirm it is a good candidate before overlaying.",
      },
    ],
    decision: {
      pickA: {
        heading: "Choose an asphalt driveway if…",
        bullets: [
          "You're in a cold, freeze-thaw climate like Central Ohio",
          "You want the lower upfront cost",
          "You want to use the driveway within a day or two",
          "You want cheap, near-invisible future repairs",
        ],
      },
      pickB: {
        heading: "Choose a concrete driveway if…",
        bullets: [
          "You want the maximum possible lifespan",
          "You want design options — color, stamping, decorative finishes",
          "You're okay with a higher upfront cost and a longer cure time",
          "Your climate is mild and salt exposure is low",
        ],
      },
      bottomLine:
        "For most Central Ohio homes, asphalt wins on upfront cost and cold-weather durability. Concrete makes more sense when looks and maximum lifespan matter more than budget and winter performance.",
    },
    relatedServices: [
      { title: "Driveway Paving", slug: "driveway-paving-services" },
      { title: "Residential Paving", slug: "residential-paving-services" },
      { title: "Asphalt Repair", slug: "asphalt-repair-services" },
    ],
    faq: [
      {
        q: "Is asphalt or concrete better for a driveway in cold climates?",
        a: "Asphalt is better for cold, freeze-thaw climates. It flexes with ground movement instead of cracking, while concrete is more prone to cracking and salt damage in hard winters like Central Ohio's.",
      },
      {
        q: "How long does an asphalt vs concrete driveway last?",
        a: "A well-maintained asphalt driveway typically lasts about 20–30 years; concrete lasts about 30–40. In cold climates the real-world gap narrows, because concrete cracks faster through repeated freeze-thaw winters.",
      },
      {
        q: "Does an asphalt driveway need more upkeep than concrete?",
        a: "Yes, slightly. Asphalt should be resealed every few years, but repairs are cheap and blend in. Concrete needs less frequent sealing, but its repairs are more expensive and more visible when cracks appear.",
      },
    ],
  },
  {
    slug: "asphalt-overlay-vs-replacement",
    optionA: "Overlay",
    optionB: "Replacement",
    title: "Asphalt Overlay vs Replacement",
    metaTitle: "Asphalt Overlay vs Replacement: Which Do You Need? | Central Ohio",
    metaDescription:
      "An asphalt overlay resurfaces a driveway or lot with a sound base for less disruption, while full replacement is needed when the base has failed. Compare cost drivers, lifespan, and base condition for Central Ohio property owners.",
    answerPassage:
      "Choosing between an asphalt overlay vs replacement comes down to the condition of the base underneath. Choose an overlay when the sub-base is still solid and the surface just needs a fresh, smooth top layer; choose a full replacement when the base has failed, potholes keep returning, or cracks run deep. An overlay is faster and lower-cost; replacement lasts longer.",
    trustLine:
      "Serving Delaware & Central Ohio since 1979 · Licensed & insured · Free on-site assessments",
    lastUpdated: "July 2026",
    experienceLine:
      "Our crews assess driveway and parking lot bases across Central Ohio every week to recommend overlay versus full replacement honestly.",
    comparisonTable: {
      columns: ["Factor", "Asphalt Overlay", "Full Replacement"],
      rows: [
        ["What it is", "New top layer over existing base", "Remove and rebuild base + surface"],
        ["Best when", "Base is still solid", "Base has failed or cracks are deep"],
        ["Upfront cost", "Lower", "Higher"],
        ["Added lifespan", "About 8–15 years", "About 20–30 years"],
        ["Disruption", "Less — faster turnaround", "More — full tear-out and rebuild"],
        ["Fixes deep issues", "No — only surface", "Yes — corrects the base"],
      ],
    },
    factors: [
      {
        q: "What is an asphalt overlay?",
        a: "An asphalt overlay is a new layer of asphalt laid directly over your existing surface. It restores a smooth, clean, sealed top without tearing out the old pavement, so it's faster and lower-cost — but only works when the base underneath is still structurally sound.",
      },
      {
        q: "When is an overlay the right choice?",
        a: "An overlay works when the sub-base is solid and the damage is mostly on the surface — fading, minor cracks, or a rough finish. If the foundation is stable and drainage is fine, an overlay gives you years of new life for less money and less downtime than a full rebuild.",
      },
      {
        q: "When do you need a full replacement instead?",
        a: "You need a full replacement when the base has failed — deep 'alligator' cracks, potholes that keep coming back, standing water, or a surface that's already been overlaid before. Paving over a failing base only hides the problem; the same cracks reflect back through within a season or two.",
      },
      {
        q: "How much longer does a replacement last than an overlay?",
        a: "A quality overlay typically adds about 8–15 years, while a full replacement can last 20–30 years because it corrects the base, not just the surface. Replacement costs more upfront but is the more durable fix when the foundation is the real problem.",
      },
    ],
    decision: {
      pickA: {
        heading: "Choose an overlay if…",
        bullets: [
          "The base is still solid and drains well",
          "Damage is mostly surface-level cracks or fading",
          "You want a faster turnaround and lower upfront cost",
          "The surface has not already been overlaid before",
        ],
      },
      pickB: {
        heading: "Choose a full replacement if…",
        bullets: [
          "The base has failed or cracks run deep",
          "Potholes keep returning no matter how often you patch",
          "Water pools on the surface after rain",
          "You want the longest-lasting, one-and-done fix",
        ],
      },
      bottomLine:
        "The base decides it. Sound base and surface-only wear → overlay. Failed base, deep cracks, or repeat potholes → full replacement. A free on-site assessment is the only honest way to tell which one your pavement needs.",
    },
    relatedServices: [
      { title: "Asphalt Repair", slug: "asphalt-repair-services" },
      { title: "Asphalt Paving", slug: "asphalt-paving" },
      { title: "Parking Lot Paving", slug: "parking-lot-paving-services" },
    ],
    faq: [
      {
        q: "Can you overlay asphalt that already has an overlay?",
        a: "Usually not. Once a surface has been overlaid once, a second overlay tends to fail quickly because the underlying layers are too thick and unstable. At that point a full replacement is the more reliable fix.",
      },
      {
        q: "Is an asphalt overlay cheaper than replacement?",
        a: "Yes, an overlay is lower upfront cost and faster because it reuses the existing base. It's only the smart saving when the base is sound — overlaying a failed base wastes money, because the damage returns. A free assessment confirms which applies.",
      },
      {
        q: "How do I know if my base has failed?",
        a: "Warning signs include deep interconnected 'alligator' cracks, potholes that keep returning after patching, and water pooling on the surface. These point to a base problem that an overlay can't fix — you'd need a full replacement.",
      },
    ],
  },
];
