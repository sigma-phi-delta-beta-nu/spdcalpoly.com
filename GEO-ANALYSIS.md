# GEO / AI Search Analysis — Sigma Phi Delta, Beta-Nu Chapter

**Site:** https://spdcalpoly.com (Astro static build at repo root)
**Analyzed:** 2026-05-12
**Scope:** Generative Engine Optimization (Google AI Overviews, ChatGPT, Perplexity, Bing Copilot)

---

## 1. GEO Readiness Score: 76 / 100

This site is already in the top decile for AI discoverability — it ships an `llms.txt`, AI-crawler-friendly `robots.txt`, per-page Markdown mirrors, JSON-LD, dual sitemaps, and is fully server-rendered. The remaining 24 points are mostly **schema depth (Event/FAQ), a broken social image, and off-site brand presence** — not foundational gaps.

| Criterion | Weight | Score | Notes |
|---|---|---|---|
| Citability | 25% | 21 | Specific facts everywhere (dates, majors, rush schedule); clean quotable Markdown mirrors. Missing: 134–167-word self-contained answer blocks for the obvious questions. |
| Structural readability | 20% | 16 | Clean H1→H2→H3 in mirrors; lists used well. Missing: question-form headings in mirrors, comparison tables, FAQ blocks. |
| Multi-modal | 15% | 8 | Images have good alt text. **`og-default.jpg` is referenced but does not exist.** No video/infographic/tool. |
| Authority & brand | 20% | 12 | Strong Organization schema (parent org, `memberOf` Cal Poly, `sameAs`). No chapter-level Wikipedia/Reddit/YouTube presence; no visible dates; no real `last_updated` (it's the build date). |
| Technical accessibility | 20% | 19 | Static SSR, all AI crawlers explicitly allowed, `llms.txt` present and well-formed, `<link rel="alternate" type="text/markdown">` on every page. No RSL (optional). |

---

## 2. Platform Breakdown

| Platform | Est. | Why |
|---|---|---|
| **Google AI Overviews** | ~72 | Excellent technical + schema base. Ceiling is traditional ranking authority for a small/new site; AIO pulls 92% from top-10 results. Add Event schema → strong shot at the "when is SPD rush at Cal Poly" answer box. |
| **ChatGPT (web search)** | ~62 | Leans on Wikipedia (47.9%) + Reddit (11.3%). National Sigma Phi Delta has a Wikipedia page (already in `sameAs`); the Beta-Nu chapter has no entity footprint. |
| **Perplexity** | ~58 | Reddit-dominant (≈46.7% of citations). No r/CalPoly / Reddit discussion presence detected. Strong on-site structure helps once a thread exists to anchor it. |
| **Bing Copilot** | ~65 | Good crawlability; IndexNow not implemented. Bing Webmaster + IndexNow submit is a cheap win. |

---

## 3. AI Crawler Access Status

✅ **Exemplary.** `public/robots.txt` explicitly `Allow: /` for: GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, CCBot, Google-Extended, PerplexityBot, Perplexity-User, Applebot-Extended, Bytespider, Meta-ExternalAgent, cohere-ai, YouBot. Both `sitemap-index.xml` and `sitemap.md` are declared. No changes needed.

One nuance: `dist/404.html` is **not** marked `noindex` and the bare root `/` is intentionally excluded from `sitemap.xml`'s urlset (documented in `sitemap.xml.ts`). The 404 omission is a minor hygiene item — set `noindex` on the 404 page.

---

## 4. llms.txt Status

✅ **Present and high quality** (`public/llms.txt`). Has title, blockquote summary, core pages with Markdown-mirror links, machine-readable references, a Facts block, officer lists, the Winter Rush 2026 schedule, contact info, and a "How to cite us" line. This is close to a model implementation.

Minor improvements:
- The "Winter Rush 2026" block lists January 12–15 dates — confirm this is the **2026** schedule (the repo's recent commits mention "Winter 2026 Rush"; just verify dates didn't drift from a prior year's copy).
- Consider adding an explicit `## Last updated: YYYY-MM-DD` line so agents can date the file.
- Consider adding the Markdown mirror of `/llms.txt` content itself isn't needed, but a one-line `## Canonical: https://spdcalpoly.com` helps disambiguate from any GitHub Pages mirror.

---

## 5. Brand Mention Analysis

| Surface | Status | Action |
|---|---|---|
| Wikipedia (national SPD) | ✅ exists, linked via `sameAs` | Keep. |
| Wikipedia (Beta-Nu chapter) | ❌ none | Not worth a standalone article (notability). Instead, get the chapter listed in the "Chapters" section of the national Sigma Phi Delta article and on the Cal Poly Greek life list. |
| Reddit (r/CalPoly, r/EngineeringStudents) | ❌ no detectable presence | Highest-leverage GEO move per the data — Perplexity/ChatGPT cite Reddit heavily. Encourage authentic Q&A participation during rush season; do not astroturf. |
| YouTube | ❌ none found | A single "what is SPD / chapter tour" video, even unlisted-then-public, creates a citable entity. YouTube mentions have the strongest measured correlation (~0.74) with AI citations. |
| LinkedIn | ⚠️ unknown | A chapter LinkedIn page (or consistent "Sigma Phi Delta — Beta-Nu Chapter" in members' profiles) is moderate signal and easy. |
| Instagram / Facebook | ✅ both linked in schema + llms.txt | Fine. |

---

## 6. Passage-Level Citability

The Markdown mirrors (`/index.md`, `/about.md`, `/recruitment.md`, etc.) are clean and quotable — this is the right architecture. What's missing is **explicit self-contained answer blocks (≈134–167 words)** for the exact questions a student types into an AI assistant. Add these as `## Question?` sections near the top of the relevant page/mirror:

1. **"What is Sigma Phi Delta?"** — currently the answer is split across the home hero (`The Premier / International Fraternity / for Engineers` across three `<span>`s) and the "Why this chapter" block. Add one tight definition paragraph starting `Sigma Phi Delta is the premier international professional-social fraternity for engineers, founded April 11, 1924 at USC...` (the `index.md` mirror already nearly does this — promote it into a `## What is Sigma Phi Delta?` heading).
2. **"When is Sigma Phi Delta rush at Cal Poly?"** — answer in the first 40 words of `recruitment.astro` / `recruitment.md`: dates, times, that it's open/no-commitment, and the contact. Right now the dates are correct but the lead sentence is "Rush is a series of open events held during Week 2..." — front-load the actual dates.
3. **"Who can join Sigma Phi Delta? / What majors are eligible?"** — the 16-major list is already there; add a one-line lead: `Sigma Phi Delta at Cal Poly is open to students in any ABET-accredited engineering major plus Computer Science. Eligible majors:` then the list.
4. **"Is Sigma Phi Delta a social fraternity or a professional one?"** — the about page answers this ("We are professional in that... We are social in that...") — surface it under a question heading; it's a genuinely high-volume question for professional-social fraternities.

---

## 7. Server-Side Rendering Check

✅ **No JavaScript dependency for content.** Astro static build — `dist/index.html` contains the rendered headline, full copy, both JSON-LD `<script type="application/ld+json">` blocks (Organization + WebPage), canonical, OG/Twitter tags, and the Markdown `<link rel="alternate">`. AI crawlers that don't execute JS will see everything. No action needed.

---

## 8. Top 5 Highest-Impact Changes

1. **Fix the broken Open Graph image.** `BaseHead.astro` hard-codes `image = "/og-default.jpg"` but no such file exists in `public/` (there's an empty `public/images/`). Every share/preview and the `og:image`/`twitter:image` tags currently 404. Add a 1200×630 image (chapter crest + "Sigma Phi Delta · Beta-Nu · Cal Poly SLO") at `public/og-default.jpg`, or per-page OG images for `/recruitment` etc. — *Effort: low. Impact: high (multi-modal + every social/AI preview).*
2. **Add `Event` JSON-LD for the four open rush nights** (`startDate`, `endDate`, `location` with `PostalAddress`/`name`, `organizer` → the Organization `@id`, `eventAttendanceMode`, `isAccessibleForFree: true`, `url`). This is the single best lever for owning the Google AIO answer to "Sigma Phi Delta rush Cal Poly 2026." Drive it off `src/data/rush.ts`. — *Effort: medium. Impact: high.*
3. **Add `FAQPage` JSON-LD + visible Q&A** for the four questions in §6 (what is SPD, when is rush, who's eligible, professional vs social). Note: Google has deprecated FAQ *rich results* for most sites, but the structured data still feeds AI extraction and the visible Q&A blocks improve citability regardless. — *Effort: medium. Impact: high.*
4. **Establish off-site entity presence:** one YouTube video (chapter intro/tour), authentic Reddit participation in r/CalPoly during rush, and a LinkedIn chapter page. Per Ahrefs' 75k-brand study, brand mentions correlate ~3× more strongly with AI citations than backlinks. — *Effort: medium-high. Impact: high (especially ChatGPT/Perplexity).*
5. **Make `last_updated` honest.** `page-markdown.ts` and `sitemap.xml.ts` emit `new Date()` at build time, so every page perpetually claims today's date. Source real dates from `src/data/` (e.g., the rush data's season, the officers' term year) or a per-page `updated` constant. AI systems weight recency, and a static site that always says "updated today" reads as low-trust. — *Effort: low-medium. Impact: medium.*

---

## 9. Schema Recommendations

Current: `Organization` (+ `parentOrganization`, `memberOf` CollegeOrUniversity, `sameAs`, `knowsAbout`, `slogan`) and `WebPage`. Good base. Add:

- **`Event`** (or `EducationEvent`) — one per open rush night, on `/recruitment`. Highest priority.
- **`FAQPage`** — on the pages carrying the §6 answers.
- **`ContactPoint`** inside the Organization — `contactType: "recruitment"`, `email: recruitment.spd.calpoly@gmail.com`; and `contactType: "general"`. Helps AI surface the right address for "how do I contact SPD Cal Poly."
- **`BreadcrumbList`** — cheap, helps AIO understand site structure on `/about`, `/recruitment`, `/brothers`, `/contact`.
- **`ItemList` of `Person`** on `/brothers` and `/contact` — officers as `Person` with `jobTitle` (= position) and `memberOf` the Organization. Turns the roster into extractable entities. (Use chapter emails only; no personal info beyond what's already public.)
- Consider narrowing the top-level type: `Organization` is fine, but adding `additionalType: "https://schema.org/NGO"` or keeping `Organization` with a clear `description` is acceptable; do **not** use `LocalBusiness` (it isn't one).
- Optional: `WebSite` with `potentialAction` `SearchAction` is overkill for a 5-page site — skip.

---

## 10. Content Reformatting Suggestions

- **Home hero (`index.astro`):** the H1 is `The Premier <br/> International Fraternity <br/> for Engineers` split across `<span>`s and `<br>`s. Browsers/AI generally reconstruct this, but add an `aria-label` on the `<h1>` (or keep the clean version in the Markdown mirror, which you already do) so the canonical string `The Premier International Fraternity for Engineers` is unambiguous.
- **`recruitment.md` / `recruitment.astro`:** lead with the dated answer. Replace the opening "Rush is a series of open events held during Week 2 of Winter Quarter" with "Winter Rush 2026 runs Monday January 12 – Thursday January 15, 2026 (Week 2 of Winter Quarter), 6–8 PM each night, open to all engineering students with no commitment to attend." Then the per-night list.
- **`about.md`:** add `## What is Sigma Phi Delta?` and `## Is Sigma Phi Delta professional or social?` headings over the existing copy — the text already answers both; it just isn't structured as a retrievable Q&A.
- **Add a comparison/at-a-glance table** to `about.md` or `index.md`: Founded | Chapter chartered | National chapters | Motto | Colors | Symbol | Eligible majors. Tables get pulled into AIO disproportionately, and you already have all this in `site.ts`.
- **Add visible dates** to page footers ("Page updated: <real date>") — feeds both the freshness signal and the `dateModified` you should also add to the `WebPage` schema.
- **`brothers.md`** is currently a stub ("organized by pledge class using names from the original site" but lists no names). Either populate it from `src/data/brothers.ts` (chapter-public names only) or have it link explicitly to `/contact`. A stub mirror is a wasted citability surface.

---

### Quick-win checklist (do these first)

- [x] Create `public/og-default.jpg` (1200×630). *Done — cropped from `img_2023/formal_one.jpg`; replace with a branded crest + text card when one's available.*
- [x] Add `Event` JSON-LD to `/recruitment` from `rush.ts`. *Done — `RushEventsJsonLd.astro`, driven off `startDate`/`endDate` added to `rush.ts`.*
- [x] Add `## Question?`-form headings + ~134–167-word answer blocks (what is SPD / when is rush / who's eligible). *Done — `data/faq.ts` + `FaqSection.astro` on `/recruitment` (visible Q&A + `FAQPage` JSON-LD); FAQ + "What is Sigma Phi Delta?" also added to the `/recruitment.md` and `/index.md` mirrors.*
- [x] Add `ContactPoint` to the Organization schema. *Done — recruitment + general inquiry contact points in `JsonLd.astro`.*
- [x] Replace build-time `last_updated` with real content dates. *Done — `site.lastUpdated` constant; bump it by hand on each content change. Used by the markdown mirrors, `sitemap.md`, `sitemap.xml`, and `404.md`.*
- [x] Set `noindex` on the 404 page. *Done — `noindex` prop threaded through `Base.astro` → `BaseHead.astro`; set on `404.astro`.*
- [x] Verify the Jan 12–15 rush dates are the 2026 dates everywhere. *Verified — Jan 12 2026 is a Monday; `rush.ts`, `llms.txt`, and the recruitment copy are consistent.*
- [ ] Submit to Bing Webmaster Tools + enable IndexNow. *Pending — not a code change.*
- [ ] Populate `brothers.md` or redirect its content to `/contact`. *Pending — needs a decision on which roster names are OK to publish.*

> Implementation status (2026-05-12): the seven code-side quick wins above are done and the production build is green. Off-site brand presence (Reddit / YouTube / LinkedIn / Wikipedia chapter listing) and Bing/IndexNow remain — those aren't code changes.
