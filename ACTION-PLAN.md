# Action Plan — All State Paving SEO

**Overall Health Score: 77/100** · Domain: https://www.allstatepavenow.com · 2026-06-15

## Prioritized Fix List

| Priority | Issue | Page(s) | Fix | Effort | Impact |
|---|---|---|---|---|---|
| 🔴 Critical | Double brand in title | `/areas-served/[slug]` | Remove hardcoded `\| All State Paving` from the returned title string; let root template add it | Low | High |
| 🔴 Critical | Unverified `aggregateRating` 4.9/1800 | `layout.tsx` LocalBusiness | Confirm reviews are real & findable, else remove the `aggregateRating` block | Low | High (penalty risk) |
| 🟠 High | No Google Search Console | Site-wide | Connect GSC, submit `sitemap.xml`, start collecting query/index data | Low | High |
| 🟠 High | No backlink profile (DR 7) | Domain | Build local citations (GBP, BBB, chamber, OH directories) + supplier/partner links + outreach | High | High |
| 🟠 High | Footer missing Areas Served | `Footer.tsx` | Add "Areas Served" to Useful Links column | Low | Med |
| 🟡 Medium | No service → area interlinking | `/services/[slug]` | Add a "Service Areas" block linking the 10 area pages | Low | Med |
| 🟡 Medium | Hero LCP risk | Home | Convert CSS bg hero to `next/Image` with `priority` | Med | Med |
| 🟡 Medium | No embedded map | Contact + area pages | Add embedded Google Map | Low | Med |
| 🟢 Low | Generic image alt text | Service/area images | Make alt descriptive + local | Low | Low |
| 🟢 Low | Hardcoded sitemap `lastmod` | `sitemap.ts` | Use real per-page modified dates | Low | Low |
| 🟢 Low | Verify form labels + security headers | Forms, `next.config` | Confirm `<label>`s; add HSTS / X-Content-Type-Options | Low | Low |

## 30 / 60 / 90 Day Roadmap

**Week 1–2 (Critical, code):**
- Fix area-title double-brand bug.
- Resolve `aggregateRating` (verify or remove).
- Connect GSC + submit sitemap. Confirm indexing of all services/areas.

**Month 1 (High):**
- Add Areas Served to footer; add service → area interlink blocks.
- Begin local citation/backlink campaign (GBP optimization first).
- Convert hero to priority next/Image; add embedded map.

**Month 2 (Medium):**
- Descriptive local alt text across service/area images.
- Publish 2–4 blog posts targeting "[service] cost [city]" with internal links to matching service + area pages.
- Run Ahrefs competitor gap once GSC baseline exists.

**Month 3 (Growth):**
- Build content for keyword gaps surfaced by GSC (positions 4–15 pushes).
- Continue link acquisition; pursue unlinked brand mentions → backlinks.
- Re-audit; measure score movement.

## Notes
- No live GSC/GA/Ahrefs traffic data was available (domain not in connector). Connecting GSC unlocks the Keyword Opportunity Map + User Behavior sections — currently *No Data*.
- Per data-integrity policy: no keyword volumes or traffic estimates were fabricated. Numbers above are from source code + Ahrefs Domain Rating (DR 7.0) only.
