# Terms of Reference: SEO Implementation for kyrgyzbooks.kg

## Objective

Improve organic search visibility for kyrgyzbooks.kg so it ranks for:

1. "Kyrgyz children's books"
1. "good quality Kyrgyz children's books"
1. "children's books in Kyrgyz"
1. "Chinara Sultanalieva"
1. "Kaiyrbubu Cholponkulova"

Site has three language versions: `/en/`, `/ky/`, `/ru/`. All changes must be applied consistently across all three.

-----

## 1. Title tags & meta descriptions (per page, per language)

Rewrite `<title>` tags to front-load target keywords naturally. Current titles are generic ("Kyrgyz Books"). Update to, e.g.:

- **EN home:** `Kyrgyz Children's Books | Animals of Kyrgyzstan & Musical Instruments — KyrgyzBooks`
- **EN about-us:** `Meet the Authors — Chinara Sultanalieva & Kaiyrbubu Cholponkulova | KyrgyzBooks`
- **EN about-books:** `Good Quality Kyrgyz Children's Books — Illustrated & Bilingual | KyrgyzBooks`
- Mirror the same keyword logic in `ky` (кыргыз тилиндеги балдар китептери) and `ru` (детские книги на кыргызском языке) versions, don't just translate literally — use the phrasing a KY/RU searcher would actually type.

Meta descriptions: keep under 155 characters, include the primary keyword once, and end with a call to action ("See where to buy" / "Meet the team").

## 2. Heading structure

- Every page needs exactly one `<h1>` containing a target keyword phrase.
- On `about-us`, wrap each bio in its own `<h2>` using the person's **full name exactly as commonly searched** (already done in KY version — replicate in EN/RU, currently these may be abbreviated or missing).

## 3. hreflang tags (critical — currently missing)

Add to the `<head>` of every page, pointing to all three language equivalents plus a default:

```html
<link rel="alternate" hreflang="en" href="https://kyrgyzbooks.kg/en/about-us.html" />
<link rel="alternate" hreflang="ky" href="https://kyrgyzbooks.kg/ky/about-us.html" />
<link rel="alternate" hreflang="ru" href="https://kyrgyzbooks.kg/ru/about-us.html" />
<link rel="alternate" hreflang="x-default" href="https://kyrgyzbooks.kg/en/about-us.html" />
```

Repeat per page across the site. Without this, Google may treat the three versions as duplicate content or serve the wrong one to searchers.

## 4. Canonical tags

Ensure every page has a self-referencing canonical (not just the homepage):

```html
<link rel="canonical" href="https://kyrgyzbooks.kg/en/about-us.html" />
```

## 5. Structured data (schema.org JSON-LD) — biggest gap

Add JSON-LD blocks. **Every block below must appear on all three language versions of its page (`/en/`, `/ky/`, `/ru/`), not just once site-wide.** Proper nouns (people's names, book titles, org name) stay the same across languages; descriptive fields (`jobTitle`, `genre`, `description`) should be translated to match the page's language, and `inLanguage`/`url` must match the specific page the block sits on. Example for the Person block — same person, three pages:

```json
// on /en/about-us.html
{ "jobTitle": "Curator, Author", "url": "https://kyrgyzbooks.kg/en/about-us.html", "inLanguage": "en" }
// on /ky/about-us.html
{ "jobTitle": "Куратор, автор", "url": "https://kyrgyzbooks.kg/ky/about-us.html", "inLanguage": "ky" }
// on /ru/about-us.html
{ "jobTitle": "Куратор, автор", "url": "https://kyrgyzbooks.kg/ru/about-us.html", "inLanguage": "ru" }
```

Apply this same pattern (translate descriptive strings, keep proper nouns, update `url`/`inLanguage`) to every JSON-LD block in this section — Organization, Book (a/b), Person (c), Association (e), and BreadcrumbList (d).

**a) Organization/Publisher (site-wide, in `<head>` of home page):**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KyrgyzBooks",
  "url": "https://kyrgyzbooks.kg",
  "description": "Publisher of Kyrgyz children's books, including 'Animals of Kyrgyzstan' and 'Musical Instruments of the Kyrgyz People'.",
  "memberOf": {
    "@type": "Organization",
    "name": "Association of Creative Publishers of the Kyrgyz Republic"
  },
  "sameAs": []
}
```

(Add sameAs links once social/Instagram accounts for the publisher itself exist.)

**b) Book schema for each title (on about-books page):**

Both books share the same author, illustrator, and curator — use identical credit blocks for each, only the `name` and `image` change:

```json
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Animals of Kyrgyzstan",
  "inLanguage": "ky",
  "author": { "@type": "Person", "name": "Kaiyrbubu Cholponkulova" },
  "illustrator": { "@type": "Person", "name": "Ainel Tavaldieva" },
  "editor": { "@type": "Person", "name": "Chinara Sultanalieva", "description": "Curator" },
  "publisher": { "@type": "Organization", "name": "KyrgyzBooks" },
  "image": "https://kyrgyzbooks.kg/assets/books/animals-of-kyrgyzstan-cover.png",
  "genre": "Children's book"
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Musical Instruments of the Kyrgyz People",
  "inLanguage": "ky",
  "author": { "@type": "Person", "name": "Kaiyrbubu Cholponkulova" },
  "illustrator": { "@type": "Person", "name": "Ainel Tavaldieva" },
  "editor": { "@type": "Person", "name": "Chinara Sultanalieva", "description": "Curator" },
  "publisher": { "@type": "Organization", "name": "KyrgyzBooks" },
  "image": "https://kyrgyzbooks.kg/assets/books/musical-instruments-cover.png",
  "genre": "Children's book"
}
```

Note: schema.org's `Book` type doesn't have an official `curator` property, so `editor` with a `description` clarifying the role is the closest accurate fit — confirm this reads correctly to the client, or drop the field if "curator" shouldn't be implied as "editor."

**c) Person schema for each bio (on about-us page):**

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Chinara Sultanalieva",
  "jobTitle": "Curator, Author",
  "image": "https://kyrgyzbooks.kg/assets/team/chinara-sultanalieva.png",
  "url": "https://kyrgyzbooks.kg/en/about-us.html",
  "sameAs": ["https://instagram.com/4inderella"]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kaiyrbubu Cholponkulova",
  "jobTitle": "Author, Poet, Translator, Singer",
  "image": "https://kyrgyzbooks.kg/assets/team/kaiyrbubu-cholponkulova.png",
  "url": "https://kyrgyzbooks.kg/en/about-us.html",
  "sameAs": ["https://www.instagram.com/kaiyrbubu_cholponkulova/"]
}
```

This Person schema is the single highest-leverage change for the two name-based keywords — it directly tells Google "this page is an authoritative source about this named individual."

**d) BreadcrumbList schema** on all inner pages (about-books, about-us, buy, get-involved) to strengthen sitelinks in search results.

**e) Association of Creative Publishers of the Kyrgyz Republic (on get-involved page)**

The homepage/get-involved copy already invites people to join this association ("Биздин Чыгармачыл басма ассоциациясына кошулуңуз"). Add an explicit Organization schema block for it on the get-involved page, and reference it via `memberOf` in KyrgyzBooks' own Organization block (see 5a above):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Association of Creative Publishers of the Kyrgyz Republic",
  "inLanguage": "en",
  "description": "Association supporting the development of creative publishing in the Kyrgyz Republic."
}
```

Translated `name`/`description` for ky/ru versions:

- **KY:** Кыргыз Республикасынын Чыгармачыл Басмаканалар Ассоциациясы
- **RU:** Ассоциация креативных издателей Кыргызской Республики

Also make sure the association's name appears as **visible text** (not just schema) on the get-involved page in all three languages — currently the KY version only implies it via "Чыгармачыл басма ассоциациясы" without a full, consistent proper name. Confirm the association's official registered name and, if they have a website, add it to `sameAs`.

## 6. Image alt text

Audit every `<img>` across en/ru versions (ky already has good descriptive alt text) — ensure alt text describes the image AND includes relevant keyword where natural, e.g.:
`alt="Chinara Sultanalieva, author and curator of Kyrgyz children's books, portrait photo"`

## 7. sitemap.xml + robots.txt

- Generate `sitemap.xml` listing all pages across en/ky/ru with `<xhtml:link>` hreflang annotations inside each `<url>` entry.
- Add/verify `robots.txt` at root referencing the sitemap:

```
Sitemap: https://kyrgyzbooks.kg/sitemap.xml
User-agent: *
Allow: /
```

## 8. Internal linking

- Add a short "About the authors" teaser block with links to the relevant bio anchor from the homepage and from about-books page, using the authors' full names as anchor text (currently the homepage doesn't mention either author by name).
- Cross-link each book (about-books) to its specific author's bio section on about-us.

## 9. Content gap — add if not present

Add a short paragraph/FAQ block answering "What makes these good quality Kyrgyz children's books?" (materials, print run, bilingual features, audio/sound elements) — this directly targets the "good quality" long-tail phrase with genuine content, not keyword stuffing.

## 10. Performance

Run Lighthouse; ensure images are served as optimized WebP/compressed PNG and lazy-loaded below the fold — Core Web Vitals are a ranking factor.

-----

## Non-code tasks for the site owner (not for Claude Code)

- Register and verify the site in Google Search Console and Yandex Webmaster; submit the sitemap.
- Request that any press coverage, interviews, or partner sites (e.g. publishing associations, Kyrgyz culture NGOs) link to the about-us page using the authors' full names as anchor text — external backlinks are what ultimately wins name-based rankings, on-page schema alone won't be enough.
- Consider a short Wikipedia-style bio or LinkedIn presence for both authors if none exists, since Google favors corroborating sources for entity recognition.
