# SEO Audit — All State Paving

**Domain:** https://www.allstatepavenow.com
**Site type:** Local service business (asphalt paving contractor), Delaware OH + Central Ohio
**Platform:** Next.js 16 (App Router, SSG) + React 19 + Tailwind v4 + Supabase CMS
**Audit date:** 2026-06-15
**Method:** Full source-code review (titles, meta, schema, headings, internal links, images) + live Ahrefs domain data

---

## 1. Pre-Audit Baseline

- Site resolves; SSG pre-rendered HTML (AI/Google crawlable). ✅
- No `noindex` anywhere in source. ✅
- Canonical root: `https://www.allstatepavenow.com` (www, HTTPS). Consistent. ✅
- Google site verification present in metadata. ✅
- **Domain Rating: 7.0** (Ahrefs rank ~22.4M) — new/low-authority domain, minimal backlink profile. Expected for a recently launched site.
- **No live GSC/GA traffic data available** — domain is NOT connected to the Ahrefs/GSC connector. Traffic, CTR, query, and conversion sections below are marked *No Data*. Connect GSC to enable. (Site has GA4 `G-206Y1QGMS5` installed correctly.)
- No manual-action data accessible without GSC access.

---

## 2. Executive Summary

### Overall SEO Health Score: **77 / 100**

| # | Category | Score | Weight |
|---|---|---|---|
| 1 | Technical SEO | 88 | 12% |
| 2 | Content Quality (E-E-A-T) | 85 | 14% |
| 3 | On-Page SEO | 72 | 10% |
| 4 | Internal Linking & Architecture | 78 | 12% |
| 5 | Off-Page / Backlinks | 30 | 8% |
| 6 | Schema / Structured Data | 95 | 6% |
| 7 | Performance / Core Web Vitals | 80 | 7% |
| 8 | Local SEO | 85 | 5% |
| 9 | GEO / AI Search Readiness | 90 | 5% |
| 10 | Brand Signals | 60 | 4% |
| 11 | User Behavior | N/A (70) | 4% |
| 12 | Domain Trust | 70 | 3% |
| 13 | Outbound Links | 80 | 3% |
| 14 | Images | 80 | 3% |
| 15 | Security / Accessibility | 80 | 4% |

**The site is technically excellent for its age.** It is held back almost entirely by being a brand-new domain (no backlinks, no organic history), plus a small number of fixable on-page bugs.

### Top 5 Critical Issues
1. **Area page titles render double brand.** The `/areas-served/[slug]` template returns a title string that already ends in `| All State Paving`, and the root layout's title template (`%s | All State Paving`) appends it AGAIN → e.g. `Asphalt Paving in Columbus, OH | All State Paving | All State Paving`. This also pushes titles past 60 chars (truncated in SERP).
2. **`aggregateRating` claims 4.9 stars / 1,800 reviews** in LocalBusiness schema (`layout.tsx`). If this is not backed by genuinely countable reviews on the site / a verifiable source, it is a structured-data violation (manual action risk) and must be removed or corrected.
3. **No backlink profile.** DR 7.0. Without referring domains, local rankings will stall regardless of on-page quality.
4. **No GSC connected** — flying blind on impressions, queries, and indexing status. Cannot measure or prioritize by real demand.
5. **Footer omits "Areas Served"** — the 10 location pages (the core local-SEO asset) get no site-wide link equity; only cross-linked from the index + nearby-area lists.

### Top 5 Quick Wins
1. Fix the area-title double-brand bug (one-line change). 
2. Add "Areas Served" to the footer Useful Links column.
3. Add a "Service Areas" link block on each service page (service → area interlinking).
4. Verify or remove the `aggregateRating` numbers.
5. Connect Google Search Console (and submit sitemap) to start collecting data.

---

## 3. Findings by Category

### 1. Technical SEO — 88 ✅
- SSG via `generateStaticParams` on all dynamic routes — fast, crawlable, AI-readable.
- `robots.ts`: `allow: /`, `disallow: /api/`, sitemap referenced. Clean. No AI crawlers blocked.
- `sitemap.ts`: static pages + services + areas + published blog posts, with priorities and `lastmod`. ✅
- Canonical tags self-referencing on home, services, areas, blog. ✅
- **Warning:** `lastmod` for all static/service/area pages is hardcoded to `2026-04-08`. Won't reflect real content edits — low impact, but update when pages change.

### 2. Content Quality / E-E-A-T — 85 ✅
- **Area pages are genuinely unique** — each has a 3-paragraph hand-written intro referencing real neighborhoods (Woodland Hills, The Reserves, Bluffs at Sunbury), county specifics, and 4 unique long-form FAQs. This is NOT templated city-swapping. Excellent.
- Service pages carry expanded hero content + benefits + process + FAQ (via `service-content.ts`).
- E-E-A-T signals: founded 1979, family-owned, 2,500+ projects, 1,800+ clients, address + dual phone. Strong trust.
- Blog uses `BlogPosting` + `Person` author + `dateModified`. ✅
- **Watch:** keep blog posts to real authored bylines with credentials, not "Admin."

### 3. On-Page SEO — 72 ⚠️
- Root title/template, OG, Twitter cards all present and well-formed. ✅
- Home: 1 H1, 9 H2, 4 H3 — clean hierarchy. ✅
- Service titles: `"{Service} Services in Central Ohio | All State Paving"` ~55–58 chars. ✅
- **CRITICAL — area title double-brand** (see Executive Summary #1). 
- Meta descriptions present and unique across templates. ✅

### 4. Internal Linking & Architecture — 78 ⚠️
- Header nav: full Services dropdown (all 10). Footer: all 10 services. ✅
- Area pages cross-link to relevant services + nearby areas + "View All Areas." ✅
- Service pages link to all other services (sidebar). ✅
- **Gaps:**
  - Footer has no "Areas Served" link → 10 location pages under-linked site-wide.
  - Service pages do NOT link to area pages (no service → location interlinking).
  - No contextual body links between blog posts and service/area pages (verify as blog grows).

### 5. Off-Page / Backlinks — 30 ❌
- DR 7.0, Ahrefs rank ~22.4M. Effectively no authority yet.
- `sameAs`: Facebook, HomeAdvisor, Angi — good citation seeds, but need real referring domains.
- **Action:** local citation building (GBP, BBB, chamber, Ohio contractor directories), supplier/partner links, and outreach. This is the #1 growth lever.

### 6. Schema / Structured Data — 95 ✅
- `Organization` (w/ alternateName), `HomeAndConstructionBusiness` LocalBusiness (geo, hours, areaServed, priceRange), `WebSite` — all in root layout.
- Service pages: `Service` + `BreadcrumbList` + conditional `FAQPage`.
- Area pages: `LocalBusiness` + `BreadcrumbList` + `FAQPage`.
- Blog: `Blog` + `BlogPosting` + `BreadcrumbList`.
- Home: `ItemList` of services.
- **Only issue:** unverified `aggregateRating` (4.9 / 1800) — see Critical #2.

### 7. Performance / Core Web Vitals — 80 ✅
- All images via `next/Image` (0 raw `<img>`) → automatic width/height, lazy loading, no CLS. ✅
- Inter font via `next/font` (self-hosted, no layout shift). ✅
- GA loaded `afterInteractive`. ✅
- **Watch (LCP):** hero is a CSS `background-image` on a `min-h-[600px]` section, not a `next/Image` with `priority`/`fetchpriority="high"`. The largest paint element may load late. Consider a `priority` next/Image hero.

### 8. Local SEO — 85 ✅
- NAP consistent across constants, schema, footer (175 South Sandusky St, Suite 398, Delaware OH 43015; 1-800-568-9954).
- LocalBusiness has `geo`, `areaServed` (10 cities), hours, priceRange.
- 10 unique location pages with local keywords in title + H1.
- **Missing:** no embedded Google Map on contact/area pages. Add for local trust signal.

### 9. GEO / AI Search Readiness — 90 ✅
- `/llms.txt` present and thorough (services, areas, key facts with descriptions). ✅
- SSG pre-rendered HTML — AI crawlers can read everything. ✅
- FAQ schema + direct Q&A answer format throughout — highly citeable. ✅
- AI crawlers not blocked in robots. ✅

### 10. Brand Signals — 60 ⚠️
- New domain, limited brand search expected.
- Facebook + HomeAdvisor + Angi profiles linked. 
- **Verify** the 1,800 review count corresponds to real, findable reviews.

### 11. User Behavior — No Data
- Requires GSC + GA connection. Not available this audit.

### 12. Domain Trust — 70
- `.com` TLD (appropriate). Domain age not verified. Not an EMD. No obvious risk.

### 13. Outbound Links — 80 ✅
- Minimal, relevant outbound (BaaDigi footer credit, Facebook, review profiles). `rel="noopener noreferrer"` + `target="_blank"` used. ✅

### 14. Images — 80 ✅
- `next/Image` everywhere, no empty alts found.
- **Improve:** service/area image alt text is just the service title (e.g. `alt="Asphalt Paving"`). Make descriptive + local (e.g. `alt="Freshly paved asphalt driveway in Delaware, Ohio"`).

### 15. Security / Accessibility — 80 ✅
- HTTPS enforced; Facebook icon links have `aria-label`. ✅
- **Verify:** contact/quote form inputs have associated `<label>`s (check `QuoteForm` + `ContactForm`).
- Consider adding security headers (HSTS, X-Content-Type-Options) via `next.config` / Vercel.

---

## 4. Competitor Gap Analysis
*Not run — requires Ahrefs keyword/competitor units. Recommend a focused run on "asphalt paving Delaware OH," "paving contractor Columbus OH," "driveway paving [city]" against top 3 local competitors once GSC baseline exists.*

## 5. Keyword Opportunity Map
*No Data — connect GSC. Once live, target pages ranking positions 4–15 for "[service] [city]" combos for on-page pushes.*

## 6. Quick Reference Table

| Page | Title | Meta | H1 | Schema | Int. Links | Images | CWV | Notes |
|------|-------|------|----|--------|------------|--------|-----|-------|
| Home | ✅ | ✅ | ✅ 1 | ✅ ItemList | ✅ | ✅ | ⚠️ hero LCP | strong |
| Service/[slug] | ✅ | ✅ | ✅ | ✅ Service+FAQ+BC | ⚠️ no area links | ⚠️ generic alt | ✅ | strong |
| Area/[slug] | ❌ double brand | ✅ | ✅ | ✅ LB+FAQ+BC | ✅ | ⚠️ generic alt | ✅ | fix title |
| Blog/[slug] | ✅ | ✅ | ✅ | ✅ BlogPosting+BC | ✅ | ✅ | ✅ | good |
