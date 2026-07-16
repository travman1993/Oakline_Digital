# Image Prompts — Black Maple Digital

AI-image-generation prompts for the brand assets, updated for the Black Maple Digital rebrand (formerly Oakline Digital). These replace an oak-leaf mark in forest green with a maple-leaf mark in the new amber/maple palette.

## Brand palette reference

Use these exact hex values so every generated asset matches the site (`assets/css/style.css`):

- Background / "Black": `#0a0f0d` (near-black), `#1c1917` (dark stone)
- Primary accent / "Maple": `#c0812e` (mid amber), `#d9a354` (light amber), `#764c17` (deep amber-brown)
- Secondary gold accent: `#d4a24e`, `#e6c378`
- White text: `#ffffff`

Mark: a **maple leaf** (five-lobed, pointed), not the previous oak leaf (rounded lobes).

---

## 1. OG / social share image (`og-image.png`)

Replaces the current 1730×909 image.

```
A minimalist tech/brand banner image, 1730x909px, 16:9 aspect ratio.
Background: near-black (#0a0f0d) with a soft amber glow gradient
(#c0812e fading to transparent) blooming from the upper-left corner.
Center-left: bold wordmark text "Black Maple" in white (#ffffff),
followed by "Digital" in amber (#c0812e), modern rounded sans-serif
font (like Manrope or Inter, extra bold weight). Below the wordmark,
a smaller tagline in muted gray: "Helping Local Businesses Grow Online."
Right side: a rounded-square app-icon badge with a gradient background
from #c0812e to #d9a354, containing a simple flat-style maple leaf
silhouette in near-black (#0a0f0d), five pointed lobes, minimalist
vector icon style, centered in the badge with even padding.
Clean, professional, high contrast, no clutter, plenty of negative
space, matches a modern SaaS/agency landing page aesthetic.
```

## 2. App icon / apple-touch-icon (`apple-touch-icon.png`)

Replaces the current 1254×1254 image.

```
A square app icon, 1254x1254px, rounded-square (squircle) badge shape
filling most of the frame. Background: diagonal gradient from #c0812e
(top-left) to #d9a354 (bottom-right). Centered: a single flat-style
maple leaf silhouette in near-black (#0a0f0d), five pointed lobes,
simple minimalist vector icon (not photorealistic), bold and legible
at small sizes, even padding on all sides, no text, no drop shadow,
no gradient inside the leaf itself — solid fill only.
```

## 3. Favicon (`favicon.ico`)

Generate from the same maple-leaf mark as the app icon, simplified for legibility at 16×16 and 32×32:

```
A tiny app icon, 32x32px, flat maple leaf silhouette in near-black
(#0a0f0d) centered on a solid amber (#c0812e) rounded-square
background. Extremely simplified shape — thick leaf lobes, no fine
detail, must stay legible as a tiny browser-tab icon.
```
Export as multi-resolution `.ico` (16×16, 32×32, 48×48) from the same source art, or use a favicon generator (e.g. realfavicongenerator.net) on the finished PNG.

## 4. Logo mark (`logo.svg`)

The current `logo.svg` is an abstract oak-leaf vector graphic in green (`#0E382A` / `#68BA94`). Replace with a maple-leaf equivalent:

```
A single flat vector maple leaf icon, five pointed lobes with a short
stem, filling a 1254x1254 square canvas. Solid fill color #c0812e on
a transparent or #0a0f0d background. Clean geometric shape suitable
for an SVG logomark — smooth curves, no photorealistic texture, no
gradient, symmetrical silhouette.
```
If you generate this as a raster image, it'll need vectorizing (e.g. via Illustrator's Image Trace, Vectorizer.ai, or an SVG-native AI tool) to become a proper scalable `logo.svg`.

---

## Notes

- Once new files are ready, drop them in at the same paths/filenames (`og-image.png`, `apple-touch-icon.png`, `favicon.ico`, `logo.svg`) — every page already references those exact paths, so no HTML changes are needed.
- Keep `apple-touch-icon.png` and the favicon source square (1:1) and `og-image.png` at roughly 1.9:1 (1200×630 or 1730×909 both work fine for Open Graph).
- `manifest.webmanifest` references `apple-touch-icon.png` and `logo.svg` directly — no changes needed there once the files are swapped in place.
