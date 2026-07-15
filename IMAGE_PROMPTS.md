# AI image-generation prompts

Ready-to-paste prompts for an AI image generator (ChatGPT/DALL·E, Midjourney, etc.) to (re)create Oakline Digital's brand images at the right size for each use case. Paste one prompt at a time and specify the exact pixel dimensions in your tool's settings if it supports it (noted in each section).

Brand reference, reuse in every prompt:
- **Colors**: deep emerald green gradient (`#187A57` → `#26996d` → `#75CFA9`), warm gold accent (`#D4A24E`), near-black background (`#0B0F0D`), off-white text.
- **Mark**: a simple rounded-square badge containing an abstract oak-leaf shape (see `logo.svg`).
- **Tone**: clean, modern, minimal, trustworthy — a web design agency for local businesses (restaurants, contractors, dentists, law firms), not a flashy tech startup.

---

## 1. OG / social share image (1200×630)

Used for link previews when the site is shared on iMessage, Slack, X, Facebook, LinkedIn, etc. Referenced by `og-image.png`.

> Design a clean, modern Open Graph social-share banner, exactly 1200x630px, for a web design agency called "Oakline Digital." Near-black background (#0B0F0D) with a soft emerald-green gradient glow (#187A57 to #75CFA9) in one corner. Center-left: the wordmark "Oakline Digital" in a bold modern geometric sans-serif (like Manrope), white text, with the word "Digital" tinted emerald green. Below it, a smaller tagline in light gray: "Helping Local Businesses Grow Online." To the right, show a simple abstract rounded-square app-icon mark containing a minimal oak-leaf silhouette with an emerald gradient fill. Leave generous padding on all sides — no text closer than 80px to any edge. Flat, minimal, professional, no stock-photo people, no clutter.

## 2. Home-screen icon — iOS + Android (180×180)

Used for `apple-touch-icon.png`, and reused as-is for Android/PWA via `manifest.webmanifest` (no separate Android export needed). Both platforms apply their own mask (iOS rounds the square, Android may crop to a circle/squircle), so **do not pre-round the corners** and keep the leaf mark comfortably centered with a bit of breathing room near the edges so it isn't clipped either way.

> Design a full-bleed square app icon, exactly 180x180px, no rounded corners or padding baked in (the OS applies its own mask). Solid dark background using color #123F31 (deep forest green) filling the entire square edge-to-edge. Center a single abstract oak-leaf shape, rendered as a smooth gradient from #75CFA9 (light mint) to #187A57 (deep emerald), sized so all of its detail sits within the middle ~80% of the canvas (leave a small safe-zone margin on all sides in case a launcher crops it into a circle). Simple and bold enough to read clearly at 40x40px. No text, no wordmark, no drop shadows, no outer glow — flat vector style.

## 3. General social profile / post graphic (1080×1080)

A square graphic for use as a profile picture or a standalone social post (Instagram, Facebook Business Page, LinkedIn company page).

> Design a square social-media graphic, exactly 1080x1080px, for a web design agency called "Oakline Digital." Near-black background (#0B0F0D) with a large, soft emerald gradient glow (#187A57 to #75CFA9) radiating from the center. Centered: the rounded-square oak-leaf icon mark (gradient #75CFA9 to #187A57 leaf on a #123F31 badge) sitting above the wordmark "Oakline Digital" in bold white Manrope-style type, with "Digital" tinted emerald green. Keep all text and the icon within the center 80% of the canvas so it isn't cropped when used as a circular profile photo. Minimal, modern, no stock photography.

---

## Where these files go

Once generated, drop the exports into the repo root (overwriting the current placeholders) using these exact filenames so every page picks them up automatically — no HTML changes needed:

| File | Purpose | Size |
| --- | --- | --- |
| `og-image.png` | Social share preview | 1200×630 |
| `apple-touch-icon.png` | iOS + Android home-screen icon (via `manifest.webmanifest`) | 180×180 |
| `favicon.ico` | Browser tab icon | 32×32 (multi-size .ico) |
| `logo.svg` | Header/footer logo, PWA icon | vector |
