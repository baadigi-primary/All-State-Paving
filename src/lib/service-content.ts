export interface ServiceContent {
  slug: string;
  heroContent: string;
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  faq: { q: string; a: string }[];
}

export const SERVICE_CONTENT: ServiceContent[] = [
  {
    slug: "asphalt-paving",
    heroContent: `Asphalt is the most versatile and cost-effective paving material available for Central Ohio properties. Whether you need a smooth new surface for a driveway, a well-graded road, or a freshly paved parking area, hot-mix asphalt delivers the durability, flexibility, and clean appearance that property owners expect. At All State Paving, we have been installing and maintaining asphalt surfaces across Delaware and the surrounding counties since 1979, giving us a deep understanding of what works in Ohio's demanding climate.

What sets professional asphalt paving apart from cheaper alternatives is the engineering that goes into every layer. A proper asphalt installation starts well below the surface with grading, compacted aggregate base, and drainage planning. The hot-mix asphalt itself is applied in carefully calculated lifts and compacted at precise temperatures to achieve maximum density and longevity. Cut corners on any of these steps and you will see cracks, settling, and premature failure within a few seasons. Our crews follow the same specifications whether the job is a small residential pad or a multi-acre commercial lot.

Central Ohio's freeze-thaw cycles are particularly hard on pavement. Water seeps into small voids, freezes, expands, and breaks the asphalt apart from the inside out. That is why base preparation and proper compaction matter so much here. With over four decades of local experience, we know the soil conditions in Delaware, Marion, Franklin, and surrounding counties, and we build every project to handle what Ohio weather throws at it.`,
    benefits: [
      {
        title: "Proven Durability in Ohio Weather",
        description:
          "Hot-mix asphalt is engineered to flex with temperature changes rather than crack like rigid materials. When installed with proper base preparation and compaction, an asphalt surface in Central Ohio can last 20 to 30 years with routine maintenance. Our mix designs account for local freeze-thaw cycles.",
      },
      {
        title: "Fast Installation and Usability",
        description:
          "Unlike concrete, which requires days of curing time, asphalt can typically be driven on within 24 to 48 hours of installation. That means less disruption to your daily routine or business operations. Most residential projects are completed in a single day.",
      },
      {
        title: "Cost-Effective Over the Long Term",
        description:
          "Asphalt offers one of the lowest costs per square foot of any paving material, and its maintenance costs are equally reasonable. Sealcoating every few years and addressing small repairs early keeps your surface in excellent condition without major reinvestment.",
      },
      {
        title: "Smooth, Clean Appearance",
        description:
          "A freshly paved asphalt surface provides a uniform, jet-black finish that immediately improves the look of any property. That clean appearance makes a strong first impression for businesses and adds real curb appeal to residential properties throughout Central Ohio.",
      },
      {
        title: "Recyclable and Sustainable",
        description:
          "Asphalt is the most recycled material in America. Old asphalt can be milled, reprocessed, and reused in new paving projects, reducing waste and lowering material costs. When you choose asphalt, you are making an environmentally responsible choice.",
      },
      {
        title: "40+ Years of Local Expertise",
        description:
          "All State Paving has been a family-owned business in Delaware, Ohio since 1979. We have paved thousands of projects across Central Ohio and understand the soil types, drainage patterns, and climate challenges specific to this region. That experience shows in every job we complete.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Evaluation and Free Estimate",
        description:
          "We visit your property to assess soil conditions, drainage, existing surfaces, and access. We take measurements, discuss your goals, and provide a detailed written estimate with no hidden fees or pressure to commit.",
      },
      {
        step: 2,
        title: "Grading and Base Preparation",
        description:
          "Proper grading ensures water flows away from the paved surface and surrounding structures. We excavate to the correct depth, install compacted aggregate base material in lifts, and verify compaction density before any asphalt is placed.",
      },
      {
        step: 3,
        title: "Hot-Mix Asphalt Installation",
        description:
          "Our crew applies hot-mix asphalt at the correct temperature using commercial paving equipment. The material is spread evenly and compacted with steel-drum and pneumatic rollers to achieve the density required for long-term performance.",
      },
      {
        step: 4,
        title: "Compaction and Edge Finishing",
        description:
          "We pay careful attention to edges, transitions, and joints where most failures begin. Proper compaction at these critical points prevents water intrusion and keeps the surface intact through years of use and weather exposure.",
      },
      {
        step: 5,
        title: "Final Walkthrough and Care Instructions",
        description:
          "Once the project is complete, we walk the site with you to make sure everything meets your expectations. We provide specific guidance on curing time, when to drive on the surface, and a recommended maintenance schedule to maximize pavement life.",
      },
    ],
    faq: [
      {
        q: "How long does a new asphalt surface last in Central Ohio?",
        a: "With proper installation and routine maintenance, a well-built asphalt surface in Central Ohio typically lasts 20 to 30 years. The key factors that determine lifespan are base preparation depth, compaction density, drainage grading, and ongoing preventive care such as sealcoating every 2 to 3 years and crack sealing as needed. Central Ohio's freeze-thaw cycles, which can occur 40 to 60 times per winter, are particularly hard on pavement because water expands roughly 9 percent when it freezes inside small voids. That repeated expansion breaks asphalt apart from the inside out if the initial installation left gaps in compaction. All State Paving has been building asphalt surfaces across Central Ohio since 1979, and our 40-plus years of experience mean we know exactly how to engineer base depth and mix design for local soil and weather conditions. Contact us for a free on-site evaluation to discuss your specific project needs and expected pavement life.",
      },
      {
        q: "When is the best time of year to pave in Ohio?",
        a: "The ideal paving season in Central Ohio runs from late April through October, when ambient temperatures are consistently above 50 degrees Fahrenheit and ground conditions are stable. Hot-mix asphalt leaves the plant at around 300 degrees and needs warm ambient conditions to remain workable long enough for proper compaction. Paving in cold weather causes the material to cool too quickly, resulting in poor compaction density and a surface that cracks prematurely. All State Paving schedules projects throughout the season, and our busiest months are typically May through September. We strongly recommend booking your project early in the spring so you can lock in your preferred timeline before the schedule fills up. If you contact us during winter, we can provide an estimate and get you on the calendar for the earliest available window. Call All State Paving for a free consultation and we will help you plan the best timing for your Central Ohio paving project.",
      },
      {
        q: "How soon can I drive on new asphalt?",
        a: "In most cases, you can drive on new asphalt within 24 to 48 hours after installation, depending on the ambient temperature and thickness of the asphalt layer. However, the surface continues to cure and harden over the first 6 to 12 months as the lighter oils in the asphalt binder gradually evaporate. During that initial curing period, avoid parking in the same spot for extended periods because tires can leave indentations in the softer surface. Keep heavy equipment and sharp objects like kickstands and jack stands off the pavement, and be cautious near the edges where the asphalt is thinnest. All State Paving provides every Central Ohio customer with a written care guide at project completion that covers specific curing timelines, weight restrictions, and maintenance recommendations for your particular installation. Following these guidelines protects your investment and ensures maximum pavement life. Reach out to our team if you have any questions during the curing period.",
      },
      {
        q: "What is the difference between asphalt and blacktop?",
        a: "The terms are often used interchangeably by homeowners across Central Ohio, but there is a technical difference in the material composition. Blacktop uses a higher proportion of crushed stone aggregate and is typically mixed at higher temperatures, around 300 to 350 degrees Fahrenheit, producing a surface well suited for lower-traffic applications like residential driveways, playgrounds, and walking paths. Hot-mix asphalt uses a higher concentration of bitumen binder, which makes the finished surface more flexible and durable under heavier traffic loads, making it the preferred choice for roads, commercial parking lots, and high-traffic areas. All State Paving selects the appropriate mix design for each Central Ohio project based on the expected traffic volume, vehicle weight, and soil conditions. With over 40 years of experience, our team knows which specification delivers the best long-term performance for your particular application. Contact us for a free estimate and we will recommend the right material for your needs.",
      },
    ],
  },

  {
    slug: "commercial-paving-services",
    heroContent: `Commercial properties demand paving that can handle heavy traffic, constant use, and the expectations of customers and tenants. A deteriorating parking lot or crumbling access road sends the wrong message about your business and creates real liability concerns. All State Paving has been building and maintaining commercial asphalt surfaces across Central Ohio since 1979, working with property managers, business owners, retail centers, and municipalities to deliver surfaces that perform under pressure.

Commercial paving is fundamentally different from residential work. The base requirements are heavier because delivery trucks, garbage vehicles, and constant traffic generate loads that residential driveways never see. Drainage engineering is more complex because larger surfaces collect more water and must channel it effectively to prevent ponding and premature deterioration. The asphalt mix design, lift thickness, and compaction specifications all need to match the expected traffic volume and vehicle weight.

We have paved parking lots for retail centers, office parks, industrial facilities, churches, apartment complexes, and medical offices throughout Delaware, Columbus, Westerville, Dublin, and the surrounding areas. Every commercial project we take on includes a thorough site analysis, engineered drainage plan, and phased construction schedule that minimizes disruption to your business operations. We understand that your parking lot cannot shut down for a week, and we plan our work accordingly.`,
    benefits: [
      {
        title: "Engineered for Heavy Traffic",
        description:
          "Commercial surfaces see constant vehicle traffic including delivery trucks, service vehicles, and heavy equipment. We design the base thickness, asphalt depth, and compaction to handle these loads without premature rutting or failure. Our commercial specifications exceed minimum requirements.",
      },
      {
        title: "Minimize Business Disruption",
        description:
          "We plan commercial paving projects in phases so your business can continue operating during construction. Customers, employees, and tenants maintain access throughout the process. We schedule the most disruptive work during off-peak hours when possible.",
      },
      {
        title: "ADA and Code Compliance",
        description:
          "Commercial parking lots must meet ADA accessibility standards and local building codes. We ensure proper slope, accessible parking spaces, signage placement, and curb ramp design so your property is fully compliant and avoids costly violations.",
      },
      {
        title: "Professional Appearance That Attracts Customers",
        description:
          "Your parking lot is the first thing customers see when they visit your business. A smooth, well-striped lot with clear traffic flow communicates professionalism and attention to detail. That impression matters for retail, medical offices, restaurants, and any customer-facing property.",
      },
      {
        title: "Reduced Long-Term Liability",
        description:
          "Potholes, cracked surfaces, and faded striping create trip-and-fall hazards that expose your business to lawsuits. A properly maintained commercial surface reduces these risks significantly. We also offer ongoing maintenance programs to keep your lot in safe, compliant condition year after year.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Assessment and Traffic Analysis",
        description:
          "We evaluate your property's current condition, traffic patterns, drainage challenges, and future needs. For existing lots, we assess whether full replacement, overlay, or targeted repair makes the most sense for your budget and timeline.",
      },
      {
        step: 2,
        title: "Engineering and Phasing Plan",
        description:
          "We develop a detailed construction plan that includes base specifications, asphalt depth, drainage solutions, and a phasing schedule. The phasing plan ensures your business stays open and accessible throughout the project with clear communication at every stage.",
      },
      {
        step: 3,
        title: "Excavation, Grading, and Base Installation",
        description:
          "Heavy commercial use requires a robust foundation. We excavate to the engineered depth, install compacted aggregate base in multiple lifts, and verify compaction to specification before placing any asphalt. Proper drainage grading is built into every project.",
      },
      {
        step: 4,
        title: "Asphalt Placement and Compaction",
        description:
          "Commercial-grade hot-mix asphalt is placed in the specified lifts using full-size paving equipment. Steel-drum and pneumatic rollers achieve the density required for heavy traffic. We pay special attention to transitions, curb lines, and high-traffic areas like entrances and loading zones.",
      },
      {
        step: 5,
        title: "Striping, Signage, and Final Inspection",
        description:
          "Once the surface is ready, we handle line striping, ADA markings, directional arrows, and any required signage. A final walkthrough with your team confirms everything meets specifications and your expectations before we consider the project complete.",
      },
    ],
    faq: [
      {
        q: "How long does a commercial parking lot paving project take?",
        a: "Most commercial paving projects in Central Ohio take between 3 and 10 business days depending on the total square footage, whether the project involves full replacement or an overlay, and the complexity of drainage and base work required. A typical 50-space parking lot with full removal and repaving usually takes 5 to 7 days, while a straightforward overlay on a solid base can often be completed in 3 to 4 days. All State Paving provides a specific day-by-day timeline during the estimate phase so your team can plan accordingly. We coordinate closely with property managers and business owners on scheduling, and our phased construction approach allows portions of the lot to remain open for customers and employees throughout the project. With over 40 years of commercial paving experience across Central Ohio, we understand that minimizing downtime is critical to your business. Contact us for a free site assessment and detailed project timeline.",
      },
      {
        q: "Can you pave my parking lot in sections so my business stays open?",
        a: "Absolutely. Phased construction is standard practice for All State Paving's commercial projects throughout Central Ohio. We work directly with your management team to determine which sections of the lot can be closed on which days, establish temporary traffic flow patterns with barricades and signage, and ensure that customers, employees, and delivery vehicles always have safe access to your building. We typically divide larger lots into 2 to 4 phases, completing each section fully before moving to the next. This approach means you never lose more than 25 to 50 percent of your parking capacity at any given time. We have successfully used phased construction for retail centers, medical offices, churches, apartment complexes, and restaurant properties across Delaware, Columbus, and the surrounding Central Ohio region. Our 40-plus years of experience managing these logistics means your business operations continue with minimal disruption. Request a free estimate and we will include a detailed phasing plan.",
      },
      {
        q: "How thick does a commercial parking lot need to be?",
        a: "A standard commercial parking lot in Central Ohio typically requires 2 to 3 inches of hot-mix asphalt over 6 to 8 inches of compacted aggregate base for areas handling regular passenger vehicle traffic. High-stress zones like loading docks, dumpster pads, and delivery truck lanes often require 3 to 4 inches of asphalt over 8 to 10 inches of base to handle the heavier concentrated loads without rutting or base failure. The specific engineering depends on your soil conditions, expected traffic volume, and the types of vehicles using the lot. Central Ohio's clay-heavy soils can require additional base depth compared to regions with sandier subgrades. All State Paving evaluates each property individually and designs the pavement section to match your actual conditions rather than applying generic specifications. With over 40 years of commercial paving experience in the region, we know exactly what it takes to build a lot that performs long-term. Contact us for a free site evaluation and engineered specification.",
      },
      {
        q: "Do you handle parking lot maintenance after the initial installation?",
        a: "Yes. All State Paving offers comprehensive ongoing maintenance services for commercial parking lots throughout Central Ohio, including hot-pour crack sealing, professional sealcoating, infrared pothole repair, and line re-striping. A proactive maintenance program can double the effective lifespan of your parking lot, turning a 15-year surface into one that lasts 25 to 30 years. We recommend annual crack sealing, sealcoating every 2 to 3 years, and re-striping every 1 to 2 years depending on traffic volume. These small, scheduled investments prevent water infiltration and UV damage that lead to expensive structural failures down the road. We can set up a customized maintenance schedule tailored to your property's specific traffic patterns and condition, with annual inspections included at no additional charge. With over 40 years serving Central Ohio businesses, we have seen how regular maintenance saves property owners thousands compared to reactive repair. Call us to discuss a maintenance plan for your lot.",
      },
    ],
  },

  {
    slug: "residential-paving-services",
    heroContent: `Your home is likely your largest investment, and the condition of your driveway, walkways, and outdoor surfaces plays a bigger role in property value and daily life than most people realize. A cracked, uneven driveway is not just an eyesore; it is a tripping hazard, a water drainage problem, and a signal to potential buyers that the property has been neglected. All State Paving has been helping Central Ohio homeowners improve their properties with professional asphalt paving since 1979.

Residential paving requires a different approach than commercial work. The scale is smaller, but the attention to detail needs to be even greater because every square foot is visible and every imperfection is noticed. We take the time to get grading right so water flows away from your foundation, not toward it. We match the elevation of existing garage floors, sidewalks, and landscaping features so everything connects cleanly. And we protect your lawn, plantings, and property during construction because we know how much those details matter to homeowners.

Central Ohio homeowners face a specific challenge that many paving companies overlook: our clay-heavy soils and dramatic temperature swings. Clay soil expands when wet and contracts when dry, creating movement beneath the pavement that can cause cracking if the base is not built correctly. Our crews have decades of experience building stable bases on Ohio clay, and we use techniques specifically designed for our local conditions.`,
    benefits: [
      {
        title: "Immediate Curb Appeal Improvement",
        description:
          "A new asphalt driveway or walkway transforms the entire look of your property. The smooth, uniform black surface creates a clean, polished appearance that neighbors notice. Many of our customers tell us it is the single best improvement they have made to the exterior of their home.",
      },
      {
        title: "Increased Property Value",
        description:
          "Real estate professionals consistently rank driveway condition as a top factor in curb appeal and buyer first impressions. A professionally paved driveway can increase your home's value and make it more attractive to buyers if you ever decide to sell. It is one of the highest-return exterior improvements you can make.",
      },
      {
        title: "Proper Drainage Away from Your Foundation",
        description:
          "Poorly graded surfaces send water toward your foundation, leading to basement leaks and structural damage over time. We engineer every residential project to direct water away from your home and toward appropriate drainage areas. This protects your foundation and keeps your basement dry.",
      },
      {
        title: "Safe, Smooth Walking and Driving Surfaces",
        description:
          "Cracked, heaved, or uneven pavement is a tripping and vehicle hazard. A new asphalt surface eliminates these risks, giving your family and guests a safe, smooth surface for walking, driving, and playing. This is especially important for households with children or elderly family members.",
      },
      {
        title: "Low Maintenance Requirements",
        description:
          "Asphalt driveways need minimal upkeep compared to gravel, concrete, or pavers. An occasional sealcoat application every 2 to 3 years keeps the surface protected and looking fresh. Small cracks can be sealed quickly and affordably before they become larger problems.",
      },
    ],
    process: [
      {
        step: 1,
        title: "On-Site Consultation and Estimate",
        description:
          "We visit your home, discuss your goals, evaluate soil conditions and drainage, and take measurements. You receive a clear, written estimate that covers every aspect of the project. There is no sales pressure and no hidden costs.",
      },
      {
        step: 2,
        title: "Surface Removal and Grading",
        description:
          "If there is an existing surface, we remove it and haul away the material. We then grade the area to establish proper drainage slope away from your home, garage, and any adjacent structures. This step is critical for long-term performance.",
      },
      {
        step: 3,
        title: "Aggregate Base Installation",
        description:
          "We install compacted limestone aggregate base material to create a stable foundation. The base is placed in lifts and mechanically compacted to achieve the density needed to support the asphalt and prevent settling, especially important on Central Ohio's clay soils.",
      },
      {
        step: 4,
        title: "Asphalt Paving and Compaction",
        description:
          "Hot-mix asphalt is applied at the correct temperature and thickness, then compacted with professional rollers. We take care around edges, garage aprons, and transitions to sidewalks and landscaping to create clean, finished lines throughout.",
      },
      {
        step: 5,
        title: "Cleanup and Homeowner Walkthrough",
        description:
          "We clean up the work area, remove all debris, and walk the completed project with you. We explain when you can begin using the surface, provide maintenance recommendations, and make sure you are completely satisfied before we leave.",
      },
    ],
    faq: [
      {
        q: "How much does it cost to pave a residential driveway in Central Ohio?",
        a: "Residential driveway paving costs in Central Ohio vary based on several factors including the total square footage of the area, condition of the existing base or subgrade, whether old material needs to be removed, site accessibility for equipment, and the thickness of asphalt specified for your traffic needs. Most standard two-car residential driveways in our service area fall within a predictable range, but every property is different and accurate pricing requires an on-site evaluation. All State Paving provides free, no-obligation on-site estimates with detailed written breakdowns covering every aspect of the project so there are no surprises. We have been paving residential driveways across Central Ohio since 1979 and pride ourselves on transparent, honest pricing with no hidden fees or pressure tactics. The best way to get an accurate number for your specific driveway is to schedule a free estimate visit where we can assess your soil conditions, measure the area, and discuss your goals in person.",
      },
      {
        q: "Will the paving crew damage my lawn or landscaping?",
        a: "All State Paving takes great care to protect your property during every residential paving project in Central Ohio. Our crews use plywood sheets and protective ground mats beneath equipment to shield lawn areas, and we carefully plan access routes before any machinery enters your property to minimize impact on landscaping, flower beds, and irrigation systems. We place protective barriers around trees, bushes, and any features near the work zone. If any minor lawn damage occurs along the driveway edges during construction, we repair it as part of the project at no additional cost, including reseeding or re-sodding affected areas. With over 40 years of residential paving experience, our crews know how to operate heavy equipment in tight residential spaces without causing unnecessary damage. We treat every Central Ohio property like it is our own home, and your satisfaction with both the finished driveway and the condition of your yard is our priority. Ask about our property protection practices during your free estimate visit.",
      },
      {
        q: "Should I sealcoat my new driveway, and when?",
        a: "Yes, sealcoating is the single best maintenance step you can take to protect your driveway investment and significantly extend its lifespan in Central Ohio's demanding climate. We recommend waiting 6 to 12 months after installation to allow the asphalt to fully cure before applying the first sealcoat. Applying it too soon can trap oils in the surface and prevent proper hardening. After that initial application, reapply every 2 to 3 years for maximum protection against Ohio's freeze-thaw cycles, UV radiation that oxidizes and dries out the binder, and automotive fluids like oil and gasoline that break down asphalt chemistry. A regular sealcoating schedule can double the life of your driveway, potentially extending it from 15 years to 25 to 30 years. All State Paving offers professional sealcoating services throughout Central Ohio using commercial-grade materials applied with calibrated spray equipment. Contact us when your new driveway is ready for its first sealcoat and we will get you on a maintenance schedule.",
      },
      {
        q: "Can you pave over my existing gravel driveway?",
        a: "In many cases, yes. If your existing gravel base is in good condition with adequate depth of at least 4 to 6 inches, proper compaction density, and reasonable drainage, we can pave directly over it, saving you the cost of full excavation and new base installation. However, All State Paving always evaluates the existing gravel thoroughly before making that recommendation. If the gravel has shifted, mixed with the underlying clay soil that is common throughout Central Ohio, or lacks sufficient depth and compaction, we may need to add aggregate material and re-compact before paving to ensure a stable foundation. Paving over a poor base is a waste of money because the asphalt will crack and fail within a few years. With over 40 years of experience paving driveways across Central Ohio, we know exactly what to look for during an evaluation. We will give you a completely honest assessment during our free on-site estimate visit and recommend only what your specific property needs for lasting results.",
      },
    ],
  },

  {
    slug: "asphalt-repair-services",
    heroContent: `Every asphalt surface eventually shows signs of wear. Cracks develop from freeze-thaw cycles, potholes form from water infiltration, and edges crumble under repeated traffic stress. The question is not whether your pavement will need repair, but how soon you address problems before they multiply. At All State Paving, we have spent over 40 years repairing asphalt surfaces across Central Ohio, and the single most important lesson we have learned is this: small repairs done early save thousands compared to full replacement later.

Asphalt deterioration follows a predictable pattern in Ohio. Water enters through small surface cracks, freezes during our cold winters, expands, and widens the crack. The next thaw allows more water in, and the cycle repeats. Within a few seasons, a hairline crack becomes a pothole. That pothole allows water to reach the base material, which softens and fails, causing the surrounding asphalt to sink and break apart. What started as a five-dollar crack seal becomes a five-thousand-dollar base repair. Timely maintenance breaks this cycle.

We offer a full range of asphalt repair services including hot-pour crack sealing, infrared asphalt patching, pothole repair, skin patching, and saw-cut removal and replacement. Each method is suited to a specific type and severity of damage, and we will recommend the right approach based on what your surface actually needs, not what generates the biggest invoice.`,
    benefits: [
      {
        title: "Prevent Expensive Full Replacement",
        description:
          "Addressing cracks and potholes early prevents water from reaching the base material and causing structural failure. A few hundred dollars in crack sealing today can prevent a five-figure replacement project in three to five years. Timely repair is the most cost-effective pavement strategy there is.",
      },
      {
        title: "Restore Safety and Reduce Liability",
        description:
          "Potholes and cracked surfaces create tripping hazards for pedestrians and damage vehicles. For commercial property owners, deteriorated pavement is a significant liability exposure. Prompt repair eliminates these hazards and demonstrates responsible property maintenance.",
      },
      {
        title: "Extend Pavement Life by Years",
        description:
          "A well-maintained asphalt surface with regular crack sealing and patching can last 25 to 30 years. An identical surface with no maintenance may fail in 10 to 15 years. The math is straightforward: small, regular repair investments deliver dramatically longer pavement life.",
      },
      {
        title: "Infrared Patching for Seamless Results",
        description:
          "Traditional cold-patch pothole repairs look obvious and often fail within a season. Our infrared patching technology heats the existing asphalt, blends in new material, and recompacts the area for a repair that bonds at the molecular level. The result is virtually invisible and lasts for years.",
      },
      {
        title: "Honest Assessment, Right-Sized Repairs",
        description:
          "We will never recommend replacing an entire surface when targeted repairs will solve the problem. Our 40-plus years of experience mean we can accurately assess which areas need attention, which repair method is appropriate, and when a surface has truly reached the end of its useful life.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Pavement Condition Assessment",
        description:
          "We inspect the entire surface, not just the obvious problem spots. We check for underlying base failures, drainage issues, and patterns that indicate systemic problems versus isolated damage. This assessment determines the right repair strategy.",
      },
      {
        step: 2,
        title: "Repair Method Selection",
        description:
          "Based on the type, severity, and location of damage, we recommend the appropriate repair method. Hairline cracks get hot-pour sealant. Larger damaged areas may need infrared patching or saw-cut removal and replacement. We explain the options and costs clearly.",
      },
      {
        step: 3,
        title: "Surface Preparation",
        description:
          "Every repair method requires proper preparation for lasting results. Cracks are cleaned and dried with compressed air. Pothole areas are squared off with clean edges. Damaged base material is removed and replaced with compacted aggregate before any asphalt is placed.",
      },
      {
        step: 4,
        title: "Repair Execution and Compaction",
        description:
          "We apply the selected repair method using commercial-grade materials and equipment. Hot-pour crack sealant is applied at the correct temperature for proper adhesion. Patches are compacted to match the density and elevation of the surrounding surface for a smooth, lasting result.",
      },
    ],
    faq: [
      {
        q: "When should I repair cracks versus replace the entire surface?",
        a: "If cracking covers less than 25 to 30 percent of the total surface area and the underlying base is still solid and stable, targeted repair is almost always the more cost-effective choice. Crack sealing and patching in this scenario can extend your pavement's life by 5 to 10 years at a fraction of replacement cost. However, when cracking is widespread and interconnected in a pattern called alligator cracking, when you can see the base material settling or shifting beneath the surface, or when standing water indicates drainage failure underneath, full replacement becomes the smarter long-term investment. Continuing to patch a fundamentally failed surface is throwing money away. All State Paving has been assessing asphalt conditions across Central Ohio for over 40 years, and we pride ourselves on giving honest recommendations based on what we actually find during our inspection rather than upselling unnecessary work. Schedule a free pavement evaluation and we will show you exactly what your surface needs and why.",
      },
      {
        q: "How long do asphalt repairs last?",
        a: "The longevity of asphalt repairs depends entirely on the method used and the quality of execution. Properly executed hot-pour crack sealing typically lasts 3 to 5 years before reapplication is needed, making it an excellent value for routine maintenance across Central Ohio properties. Infrared patches and saw-cut removal and replacement repairs can last 8 to 15 years because they create a true molecular bond with the surrounding existing asphalt, essentially becoming part of the original pavement. Cold-patch repairs, which All State Paving only uses as temporary emergency solutions during winter months when hot-mix plants are closed, may last just one to two seasons before needing permanent repair. The key to long-lasting repairs is matching the right method to the specific type of damage and addressing the root cause, not just the visible symptom. Our team has over 40 years of experience diagnosing and repairing asphalt surfaces throughout Central Ohio, and we always recommend the repair method that delivers the best long-term value for your situation. Contact us for a free assessment.",
      },
      {
        q: "What is infrared asphalt patching?",
        a: "Infrared asphalt patching is an advanced repair technology that uses radiant heat panels to soften the existing asphalt around a damaged area to approximately 325 to 350 degrees Fahrenheit without burning or degrading the material. Once the existing asphalt is heated and workable, our crew rakes the softened material, adds fresh hot-mix asphalt as needed, blends the old and new material together, and recompacts the entire area with a vibratory roller. Because both materials are at working temperature when compacted, they fuse together at the molecular level, creating a seamless bond with no cold joints or seams where water can infiltrate. This produces the strongest, longest-lasting, and most visually seamless repair method available for asphalt surfaces. All State Paving uses infrared patching extensively across Central Ohio for potholes, utility cuts, localized failures, and transition repairs. The result looks virtually invisible and can last 8 to 15 years under normal traffic conditions. Ask us about infrared patching during your free repair evaluation.",
      },
      {
        q: "Can potholes be repaired permanently, or will they keep coming back?",
        a: "A pothole repaired with the right method and materials can absolutely be a permanent fix that lasts the remaining life of the surrounding pavement. The key is diagnosing and addressing the root cause rather than just treating the symptom. Most potholes form because water has infiltrated through surface cracks, softened the aggregate base underneath, and caused the asphalt to collapse under traffic loads. If the base has failed beneath the pothole, All State Paving removes all damaged asphalt around the area with clean saw-cut edges, excavates and replaces the compromised base material with fresh compacted aggregate, and installs new hot-mix asphalt with proper compaction to match the surrounding surface. Simply filling the hole with cold patch without fixing the failed base underneath is exactly why most pothole repairs come back within a season or two. Our team has been permanently repairing potholes across Central Ohio for over 40 years, and we stand behind the quality of our work. Schedule a free inspection and we will recommend the right repair approach for your situation.",
      },
    ],
  },

  {
    slug: "driveway-paving-services",
    heroContent: `Your driveway is more than a place to park your car. It is the first thing visitors see, the surface your family walks on every day, and a significant factor in your home's value and curb appeal. A worn-out, cracked, or gravel driveway drags down the appearance of even the most well-maintained home. All State Paving has been installing and resurfacing driveways across Central Ohio since 1979, and we have seen firsthand how a new driveway transforms the entire feel of a property.

We specialize in both new driveway construction and resurfacing existing driveways. New construction involves full excavation, base preparation, and paving from scratch, which is ideal for properties that have never had a paved driveway or where the existing surface has failed beyond repair. Resurfacing applies a new layer of asphalt over an existing surface that still has a solid base, saving significant cost while delivering a like-new appearance and performance.

Every driveway we install is custom-designed for the property. We account for the slope of your lot, the location of your garage, the path vehicles take, and where water needs to go. A driveway that looks great but sends water toward your foundation is a driveway that was not planned properly. We get these details right because they matter for decades to come, not just on installation day.`,
    benefits: [
      {
        title: "Custom Design for Your Property",
        description:
          "No two properties are identical, and no two driveways should be either. We design each driveway to fit your lot's specific grade, garage location, and traffic pattern. Whether you need a straight two-car driveway or a curved design with a turnaround area, we plan it specifically for your property.",
      },
      {
        title: "Resurfacing Option Saves Money",
        description:
          "If your existing driveway has a solid base but the surface is worn or cracked, resurfacing can deliver a brand-new appearance at 40 to 60 percent of the cost of full replacement. We evaluate the base condition honestly and only recommend resurfacing when it will deliver lasting results.",
      },
      {
        title: "Foundation Protection Through Proper Grading",
        description:
          "Driveway grading is one of the most important aspects of the project that homeowners rarely think about. We grade every driveway to direct water away from your home's foundation, garage, and any low-lying areas. Poor drainage is the number one cause of basement moisture problems, and your driveway plays a major role.",
      },
      {
        title: "Clean Garage Apron Transitions",
        description:
          "The transition where your driveway meets your garage floor needs to be smooth and precisely matched in elevation. A lip or gap at this point creates a trip hazard and allows water to pool at the garage entrance. We build this transition carefully so vehicles roll in and out smoothly and water stays outside.",
      },
      {
        title: "Built for Central Ohio Conditions",
        description:
          "Ohio driveways take a beating from road salt, snow plows, freeze-thaw cycles, and heavy seasonal use. We use asphalt mix designs and base depths specifically chosen for our climate, and we build every driveway to handle the weight of delivery trucks and service vehicles, not just passenger cars.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Free On-Site Measurement and Consultation",
        description:
          "We visit your property, measure the driveway area, evaluate soil and drainage conditions, and discuss options including shape, width, and whether new construction or resurfacing is the right approach. You get a detailed written estimate on the spot or within 24 hours.",
      },
      {
        step: 2,
        title: "Demolition and Excavation (New Construction)",
        description:
          "For new driveways, we remove any existing surface, excavate to the proper depth, and dispose of all material. For resurfacing, we clean and prepare the existing surface, repair any base issues, and ensure a solid bonding surface for the new asphalt layer.",
      },
      {
        step: 3,
        title: "Base Preparation and Compaction",
        description:
          "We install limestone aggregate base material in lifts, compacting each layer to achieve the density needed for long-term stability on Central Ohio's clay soils. We verify drainage slope throughout this process to ensure water moves away from your home.",
      },
      {
        step: 4,
        title: "Asphalt Installation",
        description:
          "Hot-mix asphalt is applied at the specified thickness and compacted with professional rollers. We create clean, defined edges along landscaping and walkways, and we build the garage apron transition to match your existing floor elevation precisely.",
      },
      {
        step: 5,
        title: "Final Inspection and Care Guide",
        description:
          "We walk the completed driveway with you, answer any questions, and provide a written care guide covering curing time, initial use guidelines, and long-term maintenance recommendations including when to schedule your first sealcoat application.",
      },
    ],
    faq: [
      {
        q: "Should I choose a new driveway or resurfacing?",
        a: "The right choice depends entirely on the condition of your existing base, and All State Paving evaluates this carefully during every free estimate visit in Central Ohio. If the underlying aggregate base is still stable and compacted with no signs of settling or shifting, and the surface damage is limited to the top asphalt layer such as surface cracking, oxidation, or minor wear, resurfacing is an excellent cost-effective option that delivers a like-new appearance at roughly 40 to 60 percent of full replacement cost. However, if the base has failed, which shows up as large settled or sunken areas, widespread interconnected alligator cracking, or standing water that will not drain, full replacement is the smarter long-term investment because a new asphalt layer over a bad base will fail again within a few years. With over 40 years of driveway paving experience across Central Ohio, our team can quickly identify which approach your property needs. We will always give you an honest recommendation based on what we find, not what generates the biggest invoice.",
      },
      {
        q: "How wide should a residential driveway be?",
        a: "A single-car residential driveway should be at least 10 to 12 feet wide to allow comfortable door opening on both sides of the vehicle, while a two-car driveway typically runs 18 to 24 feet wide depending on your garage door configuration and parking needs. If you need room for a turnaround area so you can pull out forward instead of backing onto the road, or if you want additional guest parking alongside the driveway, we can design a wider layout with flared sections at strategic points. All State Paving customizes the width based on your garage size, the types of vehicles you own, how you use the space daily, and any special considerations like RV or boat trailer access. Our team has been designing and building residential driveways across Central Ohio since 1979, and we factor in your property's specific grade, lot shape, and setback requirements to create a driveway that works perfectly for your household. Contact us for a free measurement and design consultation.",
      },
      {
        q: "How thick should an asphalt driveway be?",
        a: "All State Paving typically installs residential driveways in Central Ohio with 2 to 3 inches of hot-mix asphalt over 4 to 6 inches of compacted limestone aggregate base. This specification handles the weight of standard passenger vehicles, SUVs, and pickup trucks with ease and provides decades of reliable service when properly maintained. If your driveway will regularly see heavier vehicles such as RVs, boats on trailers, delivery trucks, or construction equipment, we increase both the base depth and asphalt thickness to handle those concentrated loads without rutting or settling. Central Ohio's clay-heavy soils also influence the specification because clay expands when wet and contracts when dry, creating subgrade movement that requires additional base depth to absorb. The correct thickness depends on your specific soil conditions, lot drainage, and how you use the driveway. During our free on-site estimate, we evaluate all of these factors and provide a specification engineered for your property's actual needs. Our 40-plus years of local experience mean your driveway is built right the first time.",
      },
      {
        q: "Can you add a turnaround or widen my existing driveway?",
        a: "Yes, All State Paving regularly adds turnaround areas, widens existing driveways, and extends paving to reach new structures like detached garages, workshops, and accessory buildings for Central Ohio homeowners. A turnaround area, which typically adds a 12 to 16 foot wide flared section, is one of the most popular driveway additions we install because it allows you to pull forward onto the road instead of backing out, which is both safer and more convenient. When widening or extending an existing driveway, we prepare the new base to match the existing structure and tie the new asphalt into the old surface using techniques that create a strong, clean joint. We match the new asphalt to the existing surface as closely as possible in both elevation and appearance, and we re-grade drainage across the expanded area to ensure water flows correctly. Our team has been modifying and expanding driveways across Central Ohio since 1979. Contact us for a free estimate and we will design the addition that works best for your property and budget.",
      },
    ],
  },

  {
    slug: "private-roads-paving-services",
    heroContent: `Private roads serve residential communities, housing developments, estates, and rural properties throughout Central Ohio. Unlike public roads maintained by the county or township, private roads are the responsibility of the property owners they serve. When these roads deteriorate, there is no government crew coming to fix them. All State Paving has been building and maintaining private roads across Delaware County and the surrounding region since 1979, and we understand the unique challenges these roads present.

Private road paving requires a balance between durability and budget. These roads need to handle daily passenger vehicle traffic, occasional delivery trucks, emergency vehicles, and service equipment, but they do not have the budget of a public highway project. We design private road surfaces to meet realistic traffic demands without overbuilding or overspending. The result is a road that holds up for decades at a cost that property owners or HOAs can manage.

One of the biggest challenges with private roads in Central Ohio is drainage. Many private roads were originally built as gravel lanes without engineered drainage, and they suffer from washouts, soft spots, and standing water. When we pave a private road, we address these drainage issues as part of the project. Proper crowning, ditching, and culvert installation keep water off the road surface and prevent the base failures that destroy pavement prematurely.`,
    benefits: [
      {
        title: "Designed for Realistic Traffic Loads",
        description:
          "Private roads see a mix of passenger cars, delivery vehicles, trash trucks, and emergency apparatus. We design the road section to handle these actual loads rather than guessing. The base depth and asphalt thickness are specified to match what the road will actually experience over its lifespan.",
      },
      {
        title: "Drainage Engineering Included",
        description:
          "Standing water is the leading cause of private road failure in Central Ohio. We include proper road crowning, ditch grading, and culvert installation as part of every private road project. Good drainage prevents washouts, soft spots, and the premature base failure that turns a new road into a pothole field.",
      },
      {
        title: "Cost Sharing Made Simple",
        description:
          "When multiple property owners share a private road, dividing the cost fairly can be complicated. We provide clear, detailed estimates that can easily be divided among property owners or presented to an HOA board. We have worked with homeowner associations and informal neighborhood groups throughout Central Ohio.",
      },
      {
        title: "Eliminates Gravel Road Maintenance Headaches",
        description:
          "Gravel roads need constant regrading, dust control in summer, and produce mud in wet weather. Paving eliminates all of these ongoing headaches. No more annual grading costs, no more dust coating your vehicles and home, and no more muddy tire tracks on your garage floor.",
      },
      {
        title: "Improved Property Access and Values",
        description:
          "A paved private road improves access for emergency vehicles, delivery services, and guests. It also increases the value of every property along its length. Many real estate agents report that paved road access is a significant factor in buyer interest for rural and semi-rural properties in Delaware County.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Road Survey and Stakeholder Coordination",
        description:
          "We survey the entire road length, assess existing conditions, identify drainage issues, and meet with property owners or HOA representatives. We discuss options, answer questions, and provide a comprehensive estimate that covers the full scope of work.",
      },
      {
        step: 2,
        title: "Drainage Improvements",
        description:
          "Before any paving begins, we address drainage. This may include installing or replacing culverts, grading ditches, adding road crown, and correcting low spots that collect water. Fixing drainage first ensures the new pavement has the foundation it needs to last.",
      },
      {
        step: 3,
        title: "Road Base Preparation",
        description:
          "We build or reinforce the road base with compacted aggregate material. For former gravel roads, we evaluate whether the existing gravel provides adequate base or needs to be supplemented. We compact the base in lifts and verify density before proceeding.",
      },
      {
        step: 4,
        title: "Asphalt Paving",
        description:
          "Hot-mix asphalt is placed at the specified width and thickness using commercial paving equipment. We crown the road surface for water shedding, build proper shoulder transitions, and create smooth connections to existing paved roads and driveways along the route.",
      },
      {
        step: 5,
        title: "Shoulder Finishing and Final Review",
        description:
          "We grade and compact the road shoulders to provide edge support and a clean appearance. We walk the completed road with the property owners, explain maintenance recommendations, and ensure every stakeholder is satisfied with the finished product.",
      },
    ],
    faq: [
      {
        q: "How wide does a private road need to be?",
        a: "A minimum paved width of 16 to 18 feet allows two passenger vehicles to pass each other comfortably without leaving the pavement surface. If the private road serves more than a handful of homes, sees regular delivery truck traffic, or if emergency vehicle access is a priority, All State Paving typically recommends 20 feet of paved width with compacted gravel shoulders on each side for additional safety margin. Many local fire departments in Central Ohio have minimum road width requirements of 18 to 20 feet for emergency apparatus access, and we confirm these requirements with your local jurisdiction during the planning phase so the finished road meets all applicable standards. Wider pullout areas can also be added at strategic points along longer roads to allow vehicles to pass without the cost of widening the entire length. Our team has been designing and building private roads across Delaware County and the greater Central Ohio region since 1979. Contact us for a free road survey and we will recommend the width that fits your community's needs and budget.",
      },
      {
        q: "Can you pave over our existing gravel road?",
        a: "In many cases, yes. If the existing gravel is well-compacted, at adequate depth of 6 to 8 inches or more, and has reasonable drainage with proper crowning and functional ditches, it can serve as an effective base for a new asphalt surface. All State Paving evaluates existing gravel roads carefully before making this recommendation because poor base material hidden under new asphalt leads to premature cracking, settling, and failure within just a few years, wasting your entire paving investment. We test compaction, check gravel depth at multiple points along the road, and assess whether the gravel has mixed with the underlying clay soil that is common throughout Central Ohio. If the gravel needs improvement, we add aggregate material, re-grade for proper drainage, and compact to specification before any asphalt is placed. Our team has been converting gravel roads to paved surfaces across Central Ohio since 1979, and we will always address the base honestly rather than hide a problem under a fresh layer of asphalt. Schedule a free road evaluation to find out what your gravel road needs.",
      },
      {
        q: "How do we coordinate among multiple property owners?",
        a: "All State Paving works with HOAs, informal neighborhood groups, and individual property owners regularly across Central Ohio and has extensive experience navigating the coordination process for shared private road projects. We provide a single comprehensive estimate for the full road that can easily be divided among property owners by frontage length, equal shares, or whatever cost-sharing arrangement the group agrees upon. We are happy to attend an HOA meeting or neighborhood gathering to present the estimate, explain the scope of work, and answer questions from all stakeholders. For scheduling and construction logistics, we only need one designated point of contact to coordinate access and communicate daily updates during the project. Our team has been managing multi-owner private road projects across Delaware County and the surrounding Central Ohio area for over 40 years, and we understand the dynamics involved in getting multiple property owners aligned. Reach out to us to schedule a free road survey and we will prepare a clear estimate your group can review together.",
      },
    ],
  },

  {
    slug: "farm-lane-paving-services",
    heroContent: `Central Ohio's agricultural heritage runs deep, and the farm lanes that connect barns, fields, storage facilities, and residences to the main road are the lifelines of working farms. A muddy, rutted farm lane is not just an inconvenience; it can delay equipment movement during critical planting and harvest windows, damage vehicles and trailers, and become impassable during wet weather when you need access most. All State Paving has been paving farm lanes across Delaware, Marion, Morrow, and surrounding counties since 1979, and we understand what agricultural properties need.

Farm lanes face challenges that most paving contractors do not think about. Heavy equipment like combines, grain carts, tandem trucks, and manure spreaders generate loads that dwarf anything a residential driveway sees. Turning equipment creates lateral forces that tear up poorly built surfaces. And the lane needs to work in spring mud season, during summer dust, and through fall harvest when loaded grain trucks make trip after trip to the elevator.

We build farm lanes to handle real agricultural use, not residential traffic. That means a heavier base, thicker asphalt in high-stress areas like turns and loading zones, and wider sections where equipment needs room to maneuver. We also understand that farming budgets are practical, so we work with you to prioritize the most critical sections and build a plan that makes financial sense for the operation.`,
    benefits: [
      {
        title: "Built for Heavy Equipment",
        description:
          "Combines, grain carts, loaded semis, and manure spreaders put extreme loads on a surface. We engineer farm lane bases and asphalt depth to handle these weights without rutting or failure. The specifications we use for agricultural lanes are significantly heavier than standard residential work.",
      },
      {
        title: "All-Weather Reliable Access",
        description:
          "A paved farm lane eliminates the mud-season shutdowns that plague gravel and dirt lanes. When planting weather arrives and you need to move equipment to the field, or when harvest is running and trucks need to reach the elevator, a paved lane keeps your operation moving regardless of recent rainfall.",
      },
      {
        title: "Eliminate Dust and Mud Problems",
        description:
          "Gravel lanes create dust clouds that coat buildings, equipment, and livestock areas in summer, and produce mud that tracks into barns and residences in wet weather. Paving eliminates both problems completely. Your buildings stay cleaner, your equipment lasts longer, and your home stays mud-free.",
      },
      {
        title: "Reduce Long-Term Maintenance Costs",
        description:
          "Gravel lanes require annual regrading, periodic gravel replacement, and dust control treatment. Over 10 to 15 years, these recurring costs often exceed the one-time investment in asphalt paving. A paved lane needs only periodic sealcoating and occasional crack sealing to stay in excellent condition.",
      },
      {
        title: "Phased Construction to Fit Your Budget",
        description:
          "We understand that farming operations have seasonal cash flow. We can phase construction over multiple seasons, starting with the most critical sections like the main access lane and loading area, and adding secondary lanes in subsequent years as the budget allows.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Farm Site Visit and Needs Assessment",
        description:
          "We visit your property to evaluate existing lane conditions, discuss equipment types and traffic patterns, and identify priority sections. We understand farming operations and schedule our visit at a time that works around your daily routine. Our estimate covers the full project with phasing options if needed.",
      },
      {
        step: 2,
        title: "Drainage and Grading Work",
        description:
          "Farm lanes often cross low areas and field drainage paths. We install culverts, grade ditches, and build up low sections to keep the lane above standing water. Proper drainage is even more critical for farm lanes than residential driveways because the surrounding fields channel significant water volume.",
      },
      {
        step: 3,
        title: "Heavy-Duty Base Installation",
        description:
          "We install a compacted aggregate base designed for the weight of your heaviest equipment. For lanes that carry loaded grain trucks or large tractors, we use thicker base sections than residential or standard commercial specifications. Turns and loading areas get additional base depth.",
      },
      {
        step: 4,
        title: "Asphalt Paving with Width for Equipment",
        description:
          "We pave at widths that allow your equipment to travel and turn safely. Lane width is determined by your largest equipment and whether two-way traffic is needed. Hot-mix asphalt is applied at agricultural-grade thickness and compacted for maximum density and load-bearing capacity.",
      },
    ],
    faq: [
      {
        q: "How wide should a farm lane be for equipment?",
        a: "Most farm equipment requires a minimum lane width of 14 to 16 feet for one-way traffic, which accommodates standard tractors, grain carts, and pickup trucks comfortably. If combines, wide tillage implements, or other oversized equipment need to pass other vehicles or if the lane serves as two-way access during busy planting and harvest seasons, All State Paving recommends 20 to 24 feet of paved width. Wider turnout areas of 24 to 30 feet can be strategically added at key points along the lane, such as near barn entrances, loading areas, and intersections with field access points, to allow passing without paving the entire lane at maximum width, which keeps construction costs manageable. We design the width based on your specific equipment dimensions and how the lane is used throughout the year. Our team has been paving farm lanes across Central Ohio's agricultural communities in Delaware, Marion, Morrow, and surrounding counties since 1979. Contact us for a free on-site consultation and we will measure your equipment and recommend the right lane width.",
      },
      {
        q: "Can the lane handle loaded grain trucks?",
        a: "Absolutely. A loaded grain truck can weigh 80,000 pounds or more, and All State Paving engineers the base depth and asphalt thickness specifically for those concentrated loads. We typically specify 8 to 10 inches of compacted aggregate base with 3 to 4 inches of hot-mix asphalt for farm lanes that carry loaded grain trucks, compared to the 4 to 6 inch base used for standard residential driveways. We pay special attention to the areas where trucks accelerate, brake, and turn, since those are the highest-stress points where pavement sees the most concentrated force and is most likely to rut or fail if underbuilt. Loading areas near grain bins and scale pads also receive heavier construction specifications. Our team has been building farm lanes across Central Ohio's agricultural communities in Delaware, Marion, and surrounding counties since 1979, and we understand the real-world demands that harvest traffic places on these surfaces. Contact us for a free farm site visit and we will design a lane specification that handles your heaviest equipment with confidence.",
      },
      {
        q: "What about the lane crossing a drainage ditch or creek?",
        a: "All State Paving installs properly sized culvert pipes at every drainage crossing to carry water under the lane without restricting flow or causing backup during heavy rain events. The culvert diameter, typically ranging from 12 to 36 inches depending on the watershed, is calculated based on the drainage area it serves and the expected peak water volume during Central Ohio's heaviest storms. We also build up the lane approaches on both sides of the crossing with compacted fill material and additional base depth to create a smooth, stable transition that prevents water from overtopping the lane surface during major rain events. Headwalls or riprap may be added at culvert ends to prevent erosion and protect the lane edges. These drainage crossings are some of the most critical engineering details in any farm lane project, and getting them wrong leads to washouts that can shut down access at the worst possible time. Our team has been designing farm lane drainage solutions across Central Ohio since 1979. Schedule a free site evaluation and we will assess every crossing on your property.",
      },
      {
        q: "Do you work around planting and harvest schedules?",
        a: "Yes. All State Paving understands that spring planting and fall harvest are absolutely the wrong times to block your farm lane with construction equipment. When fields need to be planted or grain needs to move to the elevator, every hour of access matters and lane downtime can cost real money. We schedule farm lane projects during the windows that work best for your agricultural operation, typically early to mid summer after planting is finished and before harvest ramps up, or late fall after harvest is complete and before winter sets in. If your operation has unique timing needs, we are flexible and will adjust our construction schedule to avoid disrupting your critical work periods. Our team has been serving Central Ohio's farming communities across Delaware, Marion, Morrow, and surrounding counties since 1979, and we genuinely understand the seasonal rhythms of agricultural life. Contact us during your off-season planning to schedule a free farm site visit, and we will lock in a construction window that keeps your operation running smoothly.",
      },
    ],
  },

  {
    slug: "parking-lot-paving-services",
    heroContent: `A parking lot is often the very first physical interaction a customer has with your business. Before they walk through your door, they have already formed an impression based on the condition of your lot. Potholes, faded striping, standing water, and crumbling edges tell customers that this business does not pay attention to details. A smooth, well-maintained lot with clear markings and good lighting tells them the opposite. All State Paving has been building parking lots across Central Ohio since 1979, and we know that a quality lot is a business investment, not just a construction project.

Parking lot construction involves significantly more engineering than most people realize. The subgrade must be evaluated and prepared for the loads it will carry. The aggregate base must be designed for the traffic mix, whether that is employee cars, customer vehicles, delivery trucks, or all three. Drainage must be planned to prevent ponding that accelerates deterioration and creates slip hazards. And the asphalt itself must be placed and compacted to specifications that ensure it holds up under years of constant use.

We build parking lots for retail centers, office buildings, medical facilities, churches, restaurants, apartment complexes, and industrial properties throughout Delaware, Columbus, and the Central Ohio region. Each type of facility has different traffic patterns, peak usage times, and load requirements, and we design accordingly. A church lot that sees heavy use twice a week is a fundamentally different project than a medical office lot with constant daily traffic.`,
    benefits: [
      {
        title: "Custom Engineering for Your Traffic Type",
        description:
          "A restaurant parking lot has different demands than a warehouse lot. We analyze your specific traffic mix including vehicle types, daily volume, and peak usage patterns to design a lot that performs under your actual conditions. Delivery areas and drive lanes get heavier construction than standard parking stalls.",
      },
      {
        title: "Proper Stormwater Drainage",
        description:
          "Standing water in a parking lot is a safety hazard, an accelerated deterioration factor, and a code compliance issue. We engineer the grade and drainage for every lot we build, directing water to appropriate collection points without creating ponding areas. In Central Ohio's heavy rain events, proper drainage is not optional.",
      },
      {
        title: "Maximized Parking Capacity",
        description:
          "Professional lot design maximizes the number of parking spaces within your available area while maintaining safe traffic flow. We lay out stall dimensions, drive lane widths, and traffic circulation patterns that meet code requirements and get the most out of your property footprint.",
      },
      {
        title: "Complete Turnkey Service",
        description:
          "We handle every aspect of parking lot construction from initial grading through final striping. You get a single point of contact and a coordinated project rather than juggling multiple contractors for excavation, paving, and striping. One company, one schedule, one accountable team.",
      },
      {
        title: "Ongoing Maintenance Programs",
        description:
          "A new parking lot is an investment worth protecting. We offer maintenance programs that include crack sealing, sealcoating, and re-striping on a regular schedule. Proactive maintenance can double the life of your lot compared to a reactive approach that waits until major damage occurs.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Property Evaluation and Lot Design",
        description:
          "We evaluate your property, discuss your needs and vehicle capacity requirements, and develop a lot layout that maximizes parking while ensuring safe traffic flow. We account for ADA spaces, fire lanes, loading zones, and any municipality-specific requirements.",
      },
      {
        step: 2,
        title: "Excavation and Storm Drainage",
        description:
          "We excavate to the engineered depth and install the storm drainage system. This may include catch basins, storm pipes, French drains, or grading to existing drainage infrastructure. Getting water off the lot quickly and reliably is fundamental to long-term performance.",
      },
      {
        step: 3,
        title: "Aggregate Base Construction",
        description:
          "Compacted aggregate base is installed in lifts with each layer tested for density. Base thickness is specified based on traffic analysis, with heavier sections under drive lanes and delivery areas. We do not move forward with paving until the base meets compaction specifications.",
      },
      {
        step: 4,
        title: "Asphalt Paving",
        description:
          "Commercial-grade hot-mix asphalt is placed using full-size paving equipment for consistent depth and a smooth finish. We compact with steel-drum and pneumatic rollers, paying close attention to joints, curb lines, and the transitions where the lot meets existing roads or building entrances.",
      },
      {
        step: 5,
        title: "Striping, Markings, and Accessories",
        description:
          "We complete the lot with professional line striping including parking stalls, handicap spaces with proper signage, fire lanes, directional arrows, crosswalks, and any other required markings. The finished lot is ready for immediate use with clear, visible guidance for every driver.",
      },
    ],
    faq: [
      {
        q: "How many parking spaces can I fit in my lot?",
        a: "Parking capacity depends on the total available square footage, required drive lane widths, and the stall dimensions specified by your local Central Ohio building code. Standard parking stalls are typically 9 feet wide by 18 feet deep with 24-foot drive lanes for two-way traffic, though angled parking configurations with one-way drive lanes can sometimes yield 10 to 20 percent more spaces from the same area. ADA accessible spaces, fire lanes, loading zones, and landscaping islands also factor into the final count. All State Paving designs every parking lot layout to maximize capacity while meeting all applicable code requirements and ADA accessibility standards. We can provide a preliminary space count during the free estimate phase based on your lot dimensions and local zoning requirements. Our team has been designing and building parking lots across Central Ohio since 1979, and we know how to get the most functional parking out of your available property footprint. Contact us for a free site evaluation and lot design consultation to see exactly how many spaces your property can accommodate.",
      },
      {
        q: "How long before the new parking lot can be used?",
        a: "Most new parking lots in Central Ohio can handle standard vehicle traffic within 48 to 72 hours after paving is completed, depending on the ambient temperature and asphalt thickness. Warmer weather accelerates cooling and initial curing, while cooler fall temperatures may require slightly more time. We recommend waiting to stripe until the surface has cooled and cured sufficiently for the traffic paint to adhere properly, which typically takes 24 to 48 hours after paving. Heavy vehicles like delivery trucks and garbage trucks should be kept off the surface for at least 5 to 7 days to prevent indentation during the initial curing period. All State Paving coordinates the construction and striping timeline carefully so you can open the lot to customers as quickly as possible with minimal business disruption. For phased projects, completed sections can often be opened while we continue working on remaining areas. Our team has been building parking lots across Central Ohio since 1979 and we understand that getting your lot operational fast is a business priority. Contact us for a detailed project timeline.",
      },
      {
        q: "What maintenance does a parking lot need after installation?",
        a: "All State Paving recommends a proactive maintenance schedule for every commercial parking lot in Central Ohio that includes crack sealing annually as needed, professional sealcoating every 2 to 3 years, and line re-striping every 1 to 2 years depending on traffic volume and weather wear. Addressing small cracks with hot-pour sealant before they widen prevents water from infiltrating the base, while sealcoating blocks UV radiation and automotive fluids that oxidize and break down the asphalt binder over time. These relatively small scheduled investments prevent the water infiltration and structural damage that lead to expensive full-depth repairs or premature lot replacement. A well-maintained parking lot can last 25 to 30 years compared to just 12 to 15 years for a neglected surface. The total cost of a maintenance program over the life of the lot is typically a fraction of the repair and replacement costs it prevents. Our team has been maintaining commercial lots across Central Ohio for over 40 years, and we offer customized annual maintenance programs. Contact us to set up a schedule for your property.",
      },
      {
        q: "Do you handle parking lot expansion or reconfiguration?",
        a: "Yes. All State Paving regularly expands existing parking lots, reconfigures layouts to add more spaces, and converts underused areas like excess landscaping or abandoned drive-through lanes into additional functional parking for Central Ohio commercial properties. Expansion projects often cost significantly less than building an entirely new lot from scratch because existing infrastructure like drainage, curbing, and access points can often be extended rather than rebuilt. We match the new asphalt to the existing surface as closely as possible in both elevation and appearance, creating clean joints at the connection points to prevent water infiltration. Once the new paving is complete, we can re-stripe the entire lot with an optimized layout for a unified, professional appearance that maximizes your total space count. Common reconfiguration improvements include switching from perpendicular to angled parking in certain areas and converting two-way lanes to one-way traffic flow. With over 40 years of parking lot construction experience across Central Ohio, our team can help you get the most out of your existing property. Contact us for a free evaluation and expansion design.",
      },
    ],
  },

  {
    slug: "sealcoating-services",
    heroContent: `Sealcoating is the single most cost-effective maintenance step you can take to protect an asphalt surface and extend its lifespan. A quality sealcoat application creates a protective barrier against water penetration, UV radiation, automotive fluids, and the oxidation that turns flexible black asphalt into brittle gray pavement. All State Paving has been providing professional sealcoating services across Central Ohio since 1979, and we have seen the dramatic difference it makes in pavement longevity.

Fresh asphalt is flexible, water-resistant, and resilient. Over time, exposure to sunlight and air causes the asphalt binder to oxidize and harden. The surface fades from black to gray, becomes brittle, and develops cracks that allow water to penetrate the base. This is not a cosmetic issue; it is the beginning of structural failure. Sealcoating reverses this process by replenishing the surface with a protective coating that blocks UV rays, seals out moisture, and restores flexibility to the top layer of the pavement.

We use commercial-grade coal tar or asphalt emulsion sealers applied at the manufacturer-specified rate with professional spray equipment. We do not dilute our materials or cut corners on application thickness. Before any sealcoat goes down, we clean the surface thoroughly, repair any cracks, and ensure proper conditions for adhesion. The result is a rich black finish that looks new and protects the surface for 2 to 3 years until the next application.`,
    benefits: [
      {
        title: "Doubles the Life of Your Pavement",
        description:
          "Studies consistently show that regular sealcoating can double the service life of an asphalt surface. A driveway that might last 15 years without maintenance can last 25 to 30 years with sealcoating every 2 to 3 years. The total cost of sealcoating over that period is a fraction of what premature replacement would cost.",
      },
      {
        title: "Blocks Water, UV, and Chemical Damage",
        description:
          "Sealcoat creates a physical barrier between the asphalt and the elements that destroy it. Water cannot penetrate to the base, UV rays cannot oxidize the binder, and oil, gasoline, and road salt cannot attack the asphalt chemistry. This three-way protection is why sealcoating is so effective.",
      },
      {
        title: "Restores Rich Black Appearance",
        description:
          "Oxidized asphalt looks faded, gray, and neglected. A fresh sealcoat application instantly restores the deep black appearance of new pavement. For businesses, this improved appearance enhances the property's professional image. For homeowners, it dramatically boosts curb appeal.",
      },
      {
        title: "Fills and Seals Minor Surface Voids",
        description:
          "The sealcoat material fills small surface voids and imperfections that would otherwise collect water. These micro-repairs prevent the early-stage water infiltration that leads to crack formation. Think of it as stopping damage before it has a chance to start.",
      },
      {
        title: "Faster Snow and Ice Melting",
        description:
          "A dark, sealcoated surface absorbs more solar heat than faded gray asphalt. During Central Ohio winters, this means snow and ice melt faster on sealcoated surfaces, reducing ice hazards and the amount of salt or deicer needed. This is a practical safety benefit that many property owners appreciate.",
      },
      {
        title: "Quick Application with Minimal Disruption",
        description:
          "Most residential sealcoating projects are completed in a few hours, and the surface is ready for traffic within 24 to 48 hours. Commercial properties can be phased so portions of the lot remain open during application. The minimal disruption makes it easy to stay on a regular maintenance schedule.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Surface Cleaning and Preparation",
        description:
          "We thoroughly clean the surface with commercial blowers and, when necessary, power washing to remove dirt, debris, oil spots, and loose material. Oil stains are treated with a primer to ensure proper sealcoat adhesion. This preparation step is critical and is where many discount sealcoaters cut corners.",
      },
      {
        step: 2,
        title: "Crack Repair",
        description:
          "Any existing cracks are filled with hot-pour rubber crack sealant before the sealcoat is applied. Sealcoating over unfilled cracks simply covers the problem without fixing it. Our crack repair step ensures the surface is structurally sound before the protective coating goes on.",
      },
      {
        step: 3,
        title: "Professional Sealcoat Application",
        description:
          "We apply commercial-grade sealer at the manufacturer-specified rate using calibrated spray equipment for uniform coverage. We apply two coats with adequate drying time between them, ensuring full, consistent protection. Edges, curb lines, and garage aprons are finished by hand for precision.",
      },
      {
        step: 4,
        title: "Curing and Barricading",
        description:
          "We barricade the treated area and clearly mark it to prevent traffic during the curing period. Depending on temperature and humidity, curing typically takes 24 to 48 hours. We provide specific instructions on when the surface will be ready for foot traffic and vehicle use.",
      },
    ],
    faq: [
      {
        q: "How often should I sealcoat my asphalt?",
        a: "All State Paving recommends sealcoating every 2 to 3 years for most residential and commercial asphalt surfaces in Central Ohio. This interval provides the optimal balance between protection and cost-effectiveness for our climate, which subjects pavement to harsh UV exposure in summer, frequent freeze-thaw cycles in winter, and road salt contact for 4 to 5 months each year. High-traffic commercial parking lots that see constant daily vehicle movement may benefit from sealcoating every 18 to 24 months to maintain adequate surface protection. The first sealcoat application should wait 6 to 12 months after new asphalt installation to allow the lighter oils in the binder to evaporate and the surface to fully cure and harden. Applying sealcoat too early can trap these oils and prevent proper curing. After that initial application, maintaining a regular 2 to 3 year schedule provides the best long-term protection and can double your pavement's lifespan. Contact All State Paving to schedule your sealcoat application or to set up a recurring maintenance plan for your Central Ohio property.",
      },
      {
        q: "Can sealcoating fix cracks and damage?",
        a: "Sealcoating is a preventive maintenance treatment designed to protect healthy asphalt from future damage, not a structural repair method. It creates a protective barrier against water, UV rays, and automotive fluids, but it cannot repair existing cracks, fill potholes, or address base failures beneath the surface. Applying sealcoat over unfilled cracks simply covers the problem cosmetically while water continues to penetrate and cause damage underneath. That is exactly why All State Paving always fills and seals all cracks with hot-pour rubber sealant before applying the sealcoat on any Central Ohio project. If your surface has significant damage such as widespread cracking, potholes, or settled areas, we will recommend the appropriate repairs first, whether that is crack sealing, infrared patching, or saw-cut removal and replacement, so the sealcoat can do its job effectively on a structurally sound surface. With over 40 years of experience, we provide honest assessments and never apply sealcoat over damage that needs to be repaired first. Contact us for a free pavement evaluation.",
      },
      {
        q: "What is the difference between spray and brush application?",
        a: "Professional spray application using calibrated commercial equipment delivers the most consistent coverage and the correct material thickness across the entire surface. The spray system applies sealer at a precisely controlled rate, typically 0.15 to 0.20 gallons per square yard per coat, ensuring uniform protection without thin spots or over-application. Brush and squeegee application can be effective for smaller areas, tight spaces, and detail work around curbs, garage aprons, and landscaping edges, and All State Paving uses hand tools for this precision work on every Central Ohio project we complete. We strongly advise against homeowner-grade brush-on sealcoat products available at hardware stores, as these consumer products are significantly thinner, contain fewer solids, and provide far less durable protection than the commercial-grade coal tar or asphalt emulsion sealers we apply professionally. The cost difference between a DIY application and professional service is modest, but the performance difference is dramatic. Contact All State Paving to schedule professional sealcoating for your Central Ohio driveway or parking lot and get results that actually last 2 to 3 years.",
      },
      {
        q: "Will sealcoating make my driveway slippery?",
        a: "Freshly applied sealcoat can be slightly slick when wet for the first few days until it fully cures and develops natural surface texture from normal foot and vehicle traffic. This is a common concern for Central Ohio homeowners, especially those with sloped driveways. All State Paving addresses this by using commercial sealcoat products that contain fine sand or aggregate additives blended into the sealer to provide traction immediately upon application, particularly on slopes, walkways, and high-traffic areas where slip resistance is most important. Within a few weeks of normal use, the surface develops a textured, non-slip finish comparable to standard unsealed asphalt as the top layer wears in under regular traffic. We have been applying professional sealcoat across Central Ohio for over 40 years and our material choices are specifically selected for safety and durability in our local conditions. If you have a particularly steep driveway, let us know during the estimate and we will use an enhanced traction additive formula. Contact us to schedule your sealcoating appointment.",
      },
    ],
  },

  {
    slug: "line-striping-services",
    heroContent: `Clear, visible pavement markings are essential for safe traffic flow, legal compliance, and the professional appearance of any parking lot or commercial property. Faded or missing striping creates confusion, wastes parking capacity, and exposes property owners to ADA violations and liability claims. All State Paving has been providing professional line striping and pavement marking services across Central Ohio since 1979, delivering crisp, durable markings that keep lots organized and compliant.

Line striping is more than just painting lines on pavement. A well-designed parking lot layout maximizes the number of spaces within the available area, establishes clear traffic flow patterns, meets ADA accessibility requirements, and designates fire lanes, loading zones, and pedestrian crosswalks. Every element has specific dimensional requirements set by local codes and federal accessibility standards. Getting these details right protects property owners from violations and keeps everyone who uses the lot safe.

We use commercial-grade traffic paint and thermoplastic materials applied with professional striping equipment for straight, consistent lines and sharp markings. Our layout work begins with precise measurement and chalk lines before any paint is applied. We handle everything from simple re-striping of existing layouts to complete new lot designs including stall dimensions, drive lane widths, ADA spaces with proper signage, and specialty markings like directional arrows, crosswalks, and no-parking zones.`,
    benefits: [
      {
        title: "ADA Compliance and Legal Protection",
        description:
          "Federal ADA requirements specify the number, size, location, and signage for accessible parking spaces. Non-compliance carries fines of up to $75,000 for a first violation and $150,000 for subsequent violations. We ensure every lot we stripe meets current ADA standards, protecting you from costly enforcement actions.",
      },
      {
        title: "Maximized Parking Capacity",
        description:
          "A professionally designed lot layout can increase parking capacity by 10 to 20 percent compared to a poorly planned design. We calculate optimal stall dimensions, angled versus perpendicular parking, and one-way versus two-way traffic flow to get the most spaces out of your available area without sacrificing safety.",
      },
      {
        title: "Improved Traffic Safety and Flow",
        description:
          "Clear directional arrows, stop bars, crosswalks, and lane markings reduce confusion and accidents in your lot. Drivers can see exactly where to go, where to park, and where pedestrians cross. This is especially important for high-traffic retail locations and medical facilities where visitors may be unfamiliar with the layout.",
      },
      {
        title: "Professional Appearance",
        description:
          "Fresh, crisp striping is one of the most visible improvements you can make to a commercial property. It immediately signals that the property is well-maintained and professionally managed. Faded, crooked, or missing lines create the opposite impression and can deter customers from entering your business.",
      },
      {
        title: "Durable Materials That Last",
        description:
          "We use commercial-grade traffic paint and thermoplastic materials that withstand heavy traffic, Ohio weather, and snow plow contact. Our markings maintain visibility significantly longer than consumer-grade products. For high-wear areas, we recommend thermoplastic markings that can last 3 to 5 times longer than standard paint.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Lot Survey and Layout Design",
        description:
          "We measure your lot, evaluate the existing layout, and discuss any changes you want to make. If it is a new lot or a redesign, we calculate the optimal layout for maximum parking capacity while meeting all code requirements for stall size, drive lane width, ADA spaces, and fire lanes.",
      },
      {
        step: 2,
        title: "Surface Preparation",
        description:
          "We clean the pavement surface to remove dirt, debris, and loose material that would prevent proper paint adhesion. If the lot has been recently sealcoated, we verify that the sealcoat has fully cured before striping. Old, faded markings are evaluated and either re-striped in place or adjusted as part of a new layout.",
      },
      {
        step: 3,
        title: "Precision Layout and Chalk Lines",
        description:
          "Every line, stall, arrow, and marking is measured and laid out with chalk lines before any paint is applied. This ensures straight lines, consistent spacing, and accurate dimensions across the entire lot. We verify ADA space placement, signage locations, and fire lane dimensions against current code requirements.",
      },
      {
        step: 4,
        title: "Professional Striping Application",
        description:
          "We apply markings using commercial striping machines that deliver consistent line width and paint thickness. Stencils are used for handicap symbols, arrows, letters, and specialty markings. We work efficiently to minimize lot closure time and typically complete most lots in a single day.",
      },
      {
        step: 5,
        title: "Signage Installation and Final Inspection",
        description:
          "We install ADA signage, fire lane signs, and any other required markers. A final inspection confirms that every marking meets dimensional standards and is clearly visible. We provide a lot diagram showing the completed layout for your property management records.",
      },
    ],
    faq: [
      {
        q: "How often does parking lot striping need to be redone?",
        a: "Standard traffic paint in a typical Central Ohio parking lot lasts approximately 12 to 18 months before it begins to fade noticeably from UV exposure, vehicle tire wear, snow plow contact, and road salt application during winter months. High-traffic retail and medical office lots may need re-striping annually to maintain clear visibility and professional appearance. Thermoplastic markings, which bond directly to the pavement surface, last significantly longer at typically 3 to 5 years even in high-traffic areas. All State Paving recommends inspecting your parking lot markings each spring after the snow season ends, when fading and damage from winter maintenance are most apparent, and scheduling re-striping before the markings deteriorate to the point where drivers cannot clearly see stall lines, directional arrows, or ADA designations. Faded markings create confusion, reduce parking efficiency, and can expose you to ADA compliance violations. With over 40 years of experience serving Central Ohio commercial properties, our team can assess your markings and recommend the right schedule and material choice. Contact us for a free lot inspection.",
      },
      {
        q: "How many ADA-accessible spaces does my lot need?",
        a: "The number of required ADA-accessible parking spaces is determined by federal law based on your total parking lot capacity. A lot with 1 to 25 total spaces needs at least 1 accessible space, 26 to 50 spaces requires 2 accessible spaces, and the requirement scales up from there with roughly 1 accessible space for every 25 standard spaces up to certain thresholds defined in the ADA Standards for Accessible Design. At least one accessible space in every lot must be van-accessible, measuring 8 feet wide with an adjacent 8-foot access aisle, and all accessible spaces must have proper signage mounted at specific heights. Non-compliance carries federal fines of up to 75,000 dollars for a first violation and 150,000 dollars for repeat violations. All State Paving calculates the exact ADA requirement for every Central Ohio parking lot we stripe and ensures full compliance with current federal and local standards. Our team has been handling ADA-compliant lot layouts across the region for over 40 years. Contact us for a free compliance review of your existing lot.",
      },
      {
        q: "Can you change my lot layout to add more spaces?",
        a: "Yes. All State Paving frequently redesigns parking lot layouts for Central Ohio businesses to increase capacity and improve traffic flow using the existing pavement footprint. Common improvements that add spaces without any new construction include switching from 90-degree perpendicular parking to 60-degree angled parking in certain areas, converting two-way drive lanes to one-way traffic flow where circulation patterns allow it, reconfiguring underused landscape islands, and repositioning ADA spaces to optimize the surrounding standard stall layout. A professional layout redesign combined with fresh striping can increase your available parking count by 10 to 20 percent without pouring a single square foot of new asphalt, making it one of the most cost-effective improvements a property owner can make. Our team uses precise measurements and code-compliant stall dimensions to maximize every square foot of your lot while maintaining safe traffic circulation and full ADA compliance. With over 40 years of parking lot design experience across Central Ohio, we know how to find hidden capacity. Contact us for a free lot evaluation and redesign consultation.",
      },
      {
        q: "What is the difference between traffic paint and thermoplastic?",
        a: "Traffic paint is a liquid coating applied with professional striping equipment that dries to form a visible marking on the pavement surface. It is the standard choice for most Central Ohio parking lots because it costs less upfront, typically in the range of a few cents per linear foot, and delivers clean, sharp results that last 12 to 18 months under normal traffic conditions. Thermoplastic is a heated solid material applied at approximately 400 degrees Fahrenheit that bonds directly to the pavement surface and creates a thicker, more durable marking that is also retroreflective for better nighttime visibility. Thermoplastic costs more per application but lasts 3 to 5 times longer than standard traffic paint, making it significantly more cost-effective over time for high-wear areas like drive lanes, crosswalks, stop bars, and directional arrows. All State Paving helps Central Ohio property owners choose the right material for each application based on traffic volume and budget. Our team has over 40 years of striping experience. Contact us for a free consultation and we will recommend the best option for your lot.",
      },
    ],
  },
];
