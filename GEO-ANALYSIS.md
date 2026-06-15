# GEO / AI Search Analysis — All State Paving

**Domain:** https://www.allstatepavenow.com
**Date:** 2026-06-15
**Method:** Source review + live GSC data (90d)

## GEO Readiness Score: **77 / 100**

The *technical* GEO foundation is excellent — the gap is off-site brand/entity signals, which now correlate 3× more strongly with AI citations than backlinks (Ahrefs, Dec 2025).

| Criterion | Weight | Score |
|---|---|---|
| Citability (passage quality) | 25% | 90 |
| Structural Readability | 20% | 85 |
| Multi-Modal Content | 15% | 60 |
| Authority & Brand Signals | 20% | 45 |
| Technical Accessibility | 20% | 95 |

### Platform breakdown
| Platform | Score | Why |
|---|---|---|
| **Google AI Overviews** | 80 | Strong — SSG + 134–167w passages; GSC shows AI-style queries already pos 4–9 |
| **ChatGPT** | 65 | Needs Wikipedia/entity presence; off-site signals thin |
| **Perplexity** | 60 | Perplexity leans on Reddit — zero Reddit footprint |

---

## What's already working (the hard parts — done)

- **AI crawler access:** robots.txt allows all (`Allow: /`, only `/api/` disallowed). GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, ChatGPT-User all free to crawl. ✅
- **SSR/SSG:** Fully prerendered HTML (Next SSG). AI crawlers don't run JS — every word is readable. ✅
- **llms.txt:** Present at `/llms.txt`, thorough — services, 10 service areas, key facts, all with descriptions. ✅
- **Citable passages:** Service + area FAQ answers are **134–167 words** (verified ~152w), self-contained, with specific facts ($3–7/sq ft, 20–30yr lifespan, 30–50 freeze-thaw cycles). This is *exactly* the optimal citation block length. ✅
- **Question-based headings + FAQPage schema** across service and area pages. ✅
- **GEO is converting:** GSC shows AI-phrased queries ranking high already —
  - "best central ohio paving contractor for parking lots" → pos **5.5**
  - "where can I find a reliable central ohio parking lot asphalt paving contractor…" → pos **4.17**
  - "who delivers hot asphalt to residential properties?" → pos **7.83**
  - "columbus area paving contractors with project galleries" → pos 1–3

---

## The gaps (where points are lost)

### 1. Authority & Brand Signals — 45 (biggest lever)
- **Off-site brand mentions are the #1 AI-citation signal (3× backlinks)** — and the brand has almost none. `sameAs` = only Facebook, HomeAdvisor, Angi. No Wikipedia, no Reddit, no YouTube, no LinkedIn.
- **Blog author = "All State Paving Team"** (generic, no named credentialed person, no `sameAs`). AI weights named expert authorship.
- No visible "Last updated" date on service/area pages (freshness signal for AI).

### 2. Multi-Modal — 60
- Pages have one image each; gallery has 5 videos — but **videos aren't embedded on the relevant service pages**, and there are no comparison tables or charts. Multi-modal content sees **156% higher AI selection**.

---

## Top 5 highest-impact changes

| # | Change | Effort | Lever |
|---|---|---|---|
| 1 | **Build off-site brand mentions** — Reddit (r/Columbus, r/centralohio home threads), YouTube project videos, GBP posts, local forums. Get "All State Paving" named in Central Ohio contractor discussions. | High (off-site) | ChatGPT + Perplexity citations |
| 2 | **Real credentialed author** — replace "Team" with owner name + bio page + `sameAs` (LinkedIn/Facebook). | Low (code) | All platforms |
| 3 | **Add comparison tables** — "Asphalt vs Concrete cost," "Sealcoating frequency by surface type," "Repair vs Replace." Tables are highly citable + multi-modal. | Med (content) | Google AIO |
| 4 | **Embed gallery videos** on matching service pages (paving, sealcoating). | Low (code) | 156% selection lift |
| 5 | **Visible "Last updated" dates** on service/area pages. | Low (code) | Freshness |

---

## Schema recommendations
- Already strong: Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, Blog/BlogPosting, ItemList.
- **Add:** `VideoObject` for the gallery videos; real `Person` author schema with `sameAs`; consider `Review`/`AggregateRating` **only when backed by real, countable reviews** (the fabricated 4.9/1800 was just removed — re-add only from genuine GBP review counts).

## Note
- RSL 1.0 licensing not implemented — optional, low priority for a local service site.
- Brand-mention work (items #1) is off-site and outside this repo; it's the single biggest GEO lever and pairs with the backlink/citation campaign.
