# Kyrgyz Publishing — Website

Static, no-framework website for a Kyrgyz children's-book publisher, promoting
*Animals of Kyrgyzstan* and *Musical Instruments of the Kyrgyz People*.
Built per [docs/TOR_website_kyrgyz_publishing.md](docs/TOR_website_kyrgyz_publishing.md).

## Structure

```
/index.html          → redirects to /en/
/en/  /ky/  /ru/      → one folder per locale, identical page structure,
                        all three fully translated
/css/style.css        → single shared stylesheet
/js/main.js           → single shared script (mobile menu, demo-video state)
/assets/team/         → founder photos
/assets/books/        → book cover and sample-spread images
/assets/downloads/    → demo videos go here (see below)
docs/                 → project brief
```

No build step: open `en/index.html` directly, or serve the folder from any
static host.

## Known placeholders to replace before launch

- Publisher/site logo (currently a text wordmark)
- New cover image for *Animals of Kyrgyzstan* — the client's revision notes said one
  would be supplied separately; no file has been received yet, so the original cover
  is still in place.
- The two book demonstration videos — drop the `.mp4` files into
  `/assets/downloads/` using the filenames already referenced in the HTML,
  then flip each download link's `data-available="false"` to `"true"`
  in `about-books.html` (all three locales) to activate it.

Contact throughout the site now routes to Instagram DM (`@4inderella`) on the Where to
Buy page and WhatsApp (`+996 771 305 551`) on the Get Involved page — no more
placeholder email. The Price & Delivery page was removed at the client's request; the
only pricing figure left on the site is the "retail price from 1,700 KGS" note on the
Where to Buy page.

Kyrgyz and Russian copy is fully translated throughout `/ky/` and `/ru/`.
Machine-assisted; a native-speaker pass before launch is recommended,
especially for the Kyrgyz pages.

See `docs/revisions/` for the structured client revision notes this content is based on.
