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
- Real contact email (`hello@publisher.example`)
- Purchase-channel links on the Where to Buy page
- Shipping cost/time table on the Price & Delivery page
- The two book demonstration videos — drop the `.mp4` files into
  `/assets/downloads/` using the filenames already referenced in the HTML,
  then flip each download link's `data-available="false"` to `"true"`
  in `about-books.html` (all three locales) to activate it.

Kyrgyz and Russian copy is fully translated throughout `/ky/` and `/ru/`.
Machine-assisted; a native-speaker pass before launch is recommended,
especially for the Kyrgyz pages.
