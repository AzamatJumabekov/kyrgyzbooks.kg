# Terms of Reference (TOR)
## Website for the Publisher — "Animals of Kyrgyzstan" & "Musical Instruments of the Kyrgyz People"

**Prepared for:** build with Claude Code
**Document type:** Technical specification / build brief
**Version:** 1.0 — 31 August 2026

---

## 1. Project Summary

Build a single, static, **no-framework** website (plain HTML/CSS/JS — no React/Vue/Next/build pipeline) that can be hosted on **any static hosting provider** (GitHub Pages, Netlify, Vercel static hosting, Cloudflare Pages, plain S3/nginx, etc.).

The site promotes a small Kyrgyz children's-book publisher and its two 2026 titles:

1. **Animals of Kyrgyzstan** (*Кыргызстандагы жаныбарлар*)
2. **Musical Instruments of the Kyrgyz People** (*Кыргыздардын музыкалык аспаптары*)

**Phase 1 (this build):** launch the site fully in **English**.
**Phase 2 (same build, structured now):** add **Kyrgyz (ky)** and **Russian (ru)** versions using the same templates/layout. Claude Code should build the site with the multilingual structure already in place from day one (see §4), even though only the English copy is final right now — Kyrgyz/Russian copy will be supplied later and dropped into the same content files.

---

## 2. Goals

- Present the publisher's story and the two books to international and local audiences (parents, educators, distributors, cultural organizations, potential funders/partners).
- Make it effortless to move between English, Kyrgyz, and Russian.
- Give visitors a clear path to **buy the books** and see **pricing/delivery**.
- Invite collaboration: joining the publishers' association, or partnering as an illustrator/tradition-bearer on future projects — both via pre-filled `mailto:` links.
- Keep the stack radically simple: static files only, so it can be deployed anywhere in minutes and edited by non-developers later (plain HTML/text edits, no build step required).

---

## 3. Technical Requirements

- **No framework.** Vanilla HTML5, CSS3, vanilla JavaScript only. No React/Vue/Svelte/Next/Nuxt, no bundler (no Webpack/Vite build step required to run the site — plain `<script>` tags are fine). This is a strict requirement: the output must be directly deployable by uploading the folder to any static host, with no `npm run build` step needed to view it.
- Optional: light use of a CDN-hosted vanilla library is acceptable only if truly needed (e.g., a lightbox), but prefer zero dependencies.
- Fully responsive (mobile-first): must look good on phones, tablets, and desktop.
- Fast-loading: optimize/compress images, lazy-load below-the-fold images, no heavy assets blocking first paint.
- Accessible: semantic HTML, alt text on all images (including Kyrgyz/Russian alt text once translated), sufficient color contrast, keyboard-navigable menu.
- SEO basics: descriptive `<title>`, meta description, Open Graph tags per page/locale, favicon.
- Clean, readable file/folder structure (see §4) so the site is easy to hand off or maintain without a developer.
- Must render correctly offline from `file://` where reasonably possible, and must work with zero server-side logic (pure static hosting — no PHP, no server rendering, no database).

---

## 4. Internationalization (en / ky / ru) Structure

Because there is no framework/build step, use a **folder-per-locale** static structure with shared assets. This keeps things simple, is SEO-friendly (each language has real, crawlable URLs), and needs no JS routing:

```
/                         → redirects or serves the English site (default) OR is itself the English site
/en/                      → English site (Phase 1 — build this fully now)
/ky/                      → Kyrgyz site (Phase 2 — same pages, empty/placeholder Kyrgyz copy for now)
/ru/                      → Russian site (Phase 2 — same pages, empty/placeholder Russian copy for now)
/assets/                  → shared images, icons, fonts, video/audio files (shared across all locales)
/assets/team/             → team photos (provided, see §8)
/assets/books/            → book cover/spread images (provided, see §8)
/assets/downloads/        → placeholder folder for the two demo videos (see §7.2)
/css/style.css            → single shared stylesheet used by all locales
/js/main.js                → single shared script (mobile menu, language switcher, smooth scroll, etc.)
```

**Language switcher:** a persistent control (flag/text — "EN / KY / RU") in the header on every page, linking to the equivalent page in the other locale (e.g., `/en/about-books.html` ↔ `/ky/about-books.html` ↔ `/ru/about-books.html`). Keep it simple: plain `<a>` links, no JS-based content-swapping needed (though a JS-based approach is acceptable as an alternative implementation if Claude Code judges it simpler to maintain — either is fine as long as URLs remain shareable/bookmarkable per language).

**Content separation:** keep all translatable copy either directly in each locale's HTML files, or — if Claude Code prefers — factor page copy into small per-locale JSON/text files (e.g., `/en/content.json`, `/ky/content.json`, `/ru/content.json`) that the shared HTML/JS reads. Either approach is acceptable; prioritize whichever makes it easiest to drop in Kyrgyz and Russian translations later without touching layout/HTML structure.

**Phase 1 delivery expectation:** `/en/` fully built and populated with the content in §6. `/ky/` and `/ru/` should exist with the same page structure/layout and clearly marked placeholder text (e.g., "Kyrgyz translation coming soon") so translations can be dropped in later without rebuilding the site.

---

## 5. Site Map (identical across all three locales)

1. **Home** (`index.html`) — hero intro to the publisher + the two books, short teasers linking to the other sections.
2. **About the Books** (`about-books.html`) — full details on both titles (§6.2).
3. **About Us** (`about-us.html`) — founders' bios + full team credits (§6.3).
4. **Where to Buy** (`buy.html`) — purchase channels (§6.4).
5. **Price & Worldwide Delivery** (`pricing-delivery.html`) — pricing and shipping info (§6.5).
6. **Future Plans / Get Involved** (`get-involved.html`) — Association + collaboration calls-to-action (§6.6).

Global footer on every page: copyright notice (§6.7), language switcher, and a short site nav.

---

## 6. Page-by-Page Content Specification

> All copy below is the **final English source text**. Use it verbatim in `/en/`. Leave clearly labeled placeholders in `/ky/` and `/ru/` for the same content blocks.

### 6.1 Home Page

- Hero section: publisher name/logo (placeholder — no logo file provided; use a simple text wordmark until one is supplied), a one-line mission statement, and a hero image (use `/assets/books/animals-of-kyrgyzstan-cover.png` and/or `/assets/books/musical-instruments-cover.png` as a two-book hero visual).
- Short intro paragraph (can reuse the first paragraph of §6.2).
- Three feature cards/teasers linking to: **About the Books**, **About Us**, **Where to Buy**.
- Call-to-action band near the bottom linking to **Get Involved** (Association + collaboration).

### 6.2 About the Books

Use this text in full:

> In 2026, we published two children's titles in the Kyrgyz language, with an initial print run of 1,000 copies each.

**Book 1 — Animals of Kyrgyzstan**
> Animals of Kyrgyzstan introduces ten native animal species and the sounds they make. One of the featured highlights is the snow leopard, a national symbol closely associated with Bishkek, with its authentic sound provided in collaboration with the Snow Leopard Trust. Each animal is accompanied by an original poem that reflects its character and role in the local ecosystem.

- Cover image: `/assets/books/animals-of-kyrgyzstan-cover.png`
- Sample spread image: `/assets/books/snow-leopard-spread.png` (the snow leopard / "Илбирс" spread)
- Include a **"Download demonstration video"** button/link for this book (see §7.2 — file to be supplied later; build the UI now with a placeholder file path, e.g. `/assets/downloads/animals-of-kyrgyzstan-demo.mp4`).

**Book 2 — Musical Instruments of the Kyrgyz People**
> Musical Instruments of the Kyrgyz People presents eight traditional instruments with accompanying audio features. Each instrument is also introduced through a dedicated poem describing its cultural context and the occasions in which it is traditionally used.

- Cover image: `/assets/books/musical-instruments-cover.png`
- Sample spread image: `/assets/books/komuz-spread.png` (the komuz spread)
- Include a **"Download demonstration video"** button/link for this book (placeholder path: `/assets/downloads/musical-instruments-demo.mp4`).

Optional supporting facts (from the publisher's catalogue, may be included as a small "at a glance" panel if desired): both titles were printed in China; approximately 20% of the total print run sold via pre-order ahead of launch, at a retail price of USD 17 per book. (Keep the live retail price on this page consistent with whatever is entered on the Pricing page, §6.5.)

### 6.3 About Us

**Section intro:** short one-line header, e.g. "The people behind the books."

**Founder 1 — Chinara Sultanalieva** *(curator, author)*
- Photo: `/assets/team/chinara-sultanalieva.png`
- Bio (use verbatim):
> Chinara Sultanalieva is a social entrepreneur and cultural advocate in Kyrgyzstan focused on developing the Kyrgyz children's publishing sector and strengthening cultural heritage through language, storytelling, and media. She works to expand contemporary Kyrgyz cultural expression and revive forms of cultural production historically marginalized during the Soviet period.
>
> Her professional background includes senior management in media production, communications in the mining sector, and later work in environmental management, including waste and energy efficiency initiatives implemented with international development partners.

**Founder 2 — Kaiyrbubu Cholponkulova** *(author, poet, translator, singer)*
- Photo: `/assets/team/kaiyrbubu-cholponkulova.png`
- Bio (use verbatim):
> Kaiyrbubu Cholponkulova is a Kyrgyz poet and writer whose work reflects resilience, self-realization, and the lived experience of women across generations. Born in the village of Cholponbai, she wrote her first poem at the age of ten, but spent most of her early life raising a family and overcoming personal hardship, including the loss of her husband at a young age.
>
> She managed to continue her education at the National Conservatory at 60. She started to sing and returned to poetry. She published two collections: *"Juryogyumyo saktap kelem tumardai"* (Have Saved in My Heart as a Talisman) and *"Yrga Ailangian Omur"* (Life Turned into a Poem). Her writing emphasizes the importance of creative fulfillment for women at any age. She continues to be engaged in literary and creative exploration.

**Creative team / credits** — present as a simple list or small card grid (name, role, and Instagram link where available):

| Name | Role | Instagram |
|---|---|---|
| Ainel Tavaldieva (pen name "Nikkel Erin") | Illustrator of both books; also creates her own comic — her craftsmanship can be seen throughout both titles | `@little.pumpkin.ghost` |
| Karina Choyubekova | Layout designer ("верстальщица") — one of two who brought the books to their final printed form | — |
| Aizhamal Borisova | Layout designer ("верстальщица") — one of two who brought the books to their final printed form | `@jamalborisova` |
| — | Food/content styling ("Барактоо") | `@foodtimeart` |
| — | Editor | `@aliya_suran` |
| Samat Barataliev | Sourced and compiled all the animal sounds and traditional instrument melodies used in the books | `@sam_des` |

> Note on source data: the original Kyrgyz credit list read: "Сүрөтчү: @little.pumpkin.ghost · Барактоо: @foodtimeart жана jamalborisova · Редактор: @aliya_suran · Аудио добуштарды чогулткан: @sam_des." Cross-referenced against the Russian-language thank-you paragraph, "Барактоо" (layout) is attributed to Karina Choyubekova and Aizhamal Borisova (`@jamalborisova`), and the illustrator is Ainel Tavaldieva / "Nikkel Erin" (`@little.pumpkin.ghost`). Turn each `@handle` into a working link to `https://instagram.com/<handle>` (strip the `@`).

**Special thanks (separate short block at the end of the section):**
> Special thanks to the **Snow Leopard Trust** — the snow leopard sound featured in the animal book comes directly from the foundation's camera-trap recordings: it is the authentic sound of a snow leopard, recorded in Kyrgyzstan.
>
> Special thanks to **Samat Barataliev**, who found and compiled all the animal sounds and national instrument melodies used in the books.

### 6.4 Where to Buy

Build a simple, clearly-structured page listing purchase channels. **No specific retailer names, links, or store details were provided in the source material** — Claude Code should build this page with a clean layout (e.g., a card per channel: "Online," "In Bishkek," "Wholesale/Distributors," "International orders") and clearly marked placeholder text/links (e.g., `[Add online store link]`) ready for the client to fill in. Include one prominent contact-us fallback: "Don't see your region? Email us at `[publisher email]`."

### 6.5 Price & Worldwide Delivery

- State the retail price: **USD 17 per book** (source: publisher catalogue). Mark this as an editable field/placeholder near the top of the page so it's easy to update.
- Include a short section on worldwide shipping: since no specific rates/carriers were provided, build this as a clearly labeled placeholder table/panel (e.g., columns: Region | Estimated delivery time | Shipping cost) with `[TBD]` values, ready for the client to complete.
- Include a note that bulk/wholesale pricing is available on request, linking to a `mailto:` contact (reuse the same publisher email as §6.4).

### 6.6 Future Plans / Get Involved

Two clear calls to action, each as its own card/section:

**1. Join our Association of Creative Publishing**
> We unite to promote creative publishing in the Kyrgyz language.

- Button: **"Get in touch"** → `mailto:` link (see §7.1 for the exact `mailto:` format), pre-filled subject line, e.g. `Interested in joining the Association of Creative Publishing`.

**2. Future Projects — Collaborate With Us**
> If you are an illustrator or a traditional-knowledge bearer who wants to collaborate, let us know.

- Button: **"Get in touch"** → `mailto:` link, pre-filled subject line, e.g. `Collaboration inquiry — illustrator / traditional knowledge bearer`.

Optional context (from the publisher's own materials, may be woven in as supporting copy if useful — not mandatory, keep concise and paraphrased rather than pasted wholesale): the publisher is in the process of forming a Kyrgyz Children's Book Industry Association bringing together publishers, booksellers, authors, translators, and illustrators, with a focus on internationalizing the local publishing sector, building rights-management and translation capacity, and centering inclusivity and gender equity — the association will be open to secular content creators.

### 6.7 Footer (site-wide)

- Copyright line on every page: **`© 2026 [Publisher Name]. All rights reserved.`** — use the `©` symbol. Publisher's legal/brand name was not specified in the source material — use a placeholder like `[Publisher Name]` that's easy for the client to swap in, or "Animals of Kyrgyzstan & Musical Instruments of the Kyrgyz People Publishing" if a placeholder name is needed to ship the page.
- Language switcher (EN / KY / RU).
- Small nav repeating the six sections.

---

## 7. Functional Requirements

### 7.1 "Click to write an email" buttons

All "contact us" CTAs (Association sign-up, future collaboration, buy/wholesale contact) must be real `mailto:` links, not just text, e.g.:

```html
<a href="mailto:hello@publisher.example?subject=Interested%20in%20joining%20the%20Association%20of%20Creative%20Publishing">
  Get in touch
</a>
```

Use one placeholder publisher email address consistently across the site (e.g., `hello@publisher.example`) marked clearly as a value the client needs to replace with their real address.

### 7.2 "Download demonstration video" buttons

On the **About the Books** page, each book needs a clearly visible **"Download demo video"** button/link pointing to a static file, e.g.:

```html
<a href="/assets/downloads/animals-of-kyrgyzstan-demo.mp4" download>
  Download demonstration video
</a>
```

No video files were provided in this handoff — build the button/UI now (it should not error or 404-crash the page visually if the file is temporarily missing; consider a simple "coming soon" state Claude Code can toggle once real files are dropped into `/assets/downloads/`).

### 7.3 Audio (optional nice-to-have, not required for launch)

The source books include audio for each animal/instrument. If time allows, Claude Code may add small inline audio players (native `<audio controls>`) next to the sample spreads on the About the Books page as a preview teaser — using placeholder `.mp3` paths under `/assets/audio/` if no real audio files are supplied yet. This is optional polish, not a blocking requirement.

---

## 8. Provided Assets (already extracted and included with this brief)

Place these in the folder structure exactly as named so the content spec above (§6) resolves correctly:

```
assets/team/chinara-sultanalieva.png        → About Us, Founder 1 photo
assets/team/kaiyrbubu-cholponkulova.png     → About Us, Founder 2 photo
assets/books/animals-of-kyrgyzstan-cover.png → Home hero + About the Books, Book 1 cover
assets/books/snow-leopard-spread.png         → About the Books, Book 1 sample spread ("Илбирс")
assets/books/musical-instruments-cover.png   → Home hero + About the Books, Book 2 cover
assets/books/komuz-spread.png                → About the Books, Book 2 sample spread ("Комуз")
```

**Still needed from the client before full launch** (build with clear placeholders for now):
- Publisher/site logo and brand wordmark
- Real contact email address
- Real purchase-channel links (online store, distributors, etc.)
- Real shipping cost/time table
- The two book demonstration videos
- Kyrgyz and Russian translations of all page copy

---

## 9. Visual Direction

- Warm, storybook-appropriate palette drawing from the provided book art (soft greens/blues from the "Animals" cover, warm neutrals/greens from the "Musical Instruments" cover) — avoid a generic corporate look.
- Generous white space, large friendly headings, rounded imagery/cards suit a children's-book publisher.
- Typography: one clean sans-serif for body text plus a slightly bolder/friendlier display font for headings; make sure the chosen webfont has good Cyrillic glyph coverage (required for the Kyrgyz/Russian versions later).
- Photos of the two founders should be presented consistently (same aspect ratio/crop treatment) despite differing in original size/quality.

---

## 10. Deliverables & Acceptance Criteria

- [ ] Static site with no build step required to view (`/en/index.html` opens and works standalone).
- [ ] All six pages present and fully populated in English per §6.
- [ ] `/ky/` and `/ru/` folders exist with identical page structure and placeholder copy, ready for translation drop-in.
- [ ] Working language switcher on every page.
- [ ] Both team photos and all four book images in place and correctly captioned.
- [ ] Instagram credit links working (`https://instagram.com/<handle>`).
- [ ] `mailto:` buttons working for both Association and Future Projects CTAs.
- [ ] Download-video buttons present (with graceful placeholder behavior until real files are supplied).
- [ ] Copyright line with `©` symbol in the footer of every page.
- [ ] Fully responsive on mobile/tablet/desktop.
- [ ] No console errors; valid HTML; reasonable Lighthouse performance/accessibility scores.
