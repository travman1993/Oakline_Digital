# Black Maple Digital

Marketing website for Black Maple Digital — a web design agency helping local businesses grow online.

Plain **HTML + CSS + JavaScript**. No framework, no `npm install`, no bundler — just a tiny dependency-free Node script (`build.js`) that stitches shared partials into static `.html` files. The output is plain static HTML you can open directly in a browser or push straight to GitHub Pages.

## Project structure

```
src/
  partials/            Shared chunks used on every page
    head-top.html        doctype / charset / viewport
    head-assets.html      icons, manifest, browserconfig, fonts, stylesheet link
    ga4.html                Google Analytics snippet
    schema.html               ProfessionalService JSON-LD
    body-top.html              theme-flash-prevention inline script
    nav.html                    header nav + mobile menu (is-active is templated per page)
    footer.html                  site footer
    body-bottom.html              closing scripts / </body></html>
  pages/
    <page>.head.html      Per-page <title>/meta/OG/canonical block
    <page>.content.html   Per-page <main>...</main> content

build.js               Reads src/ and writes index.html, services.html, etc.
                        to the repo root. Run `node build.js` after any src/ edit.

index.html, services.html, portfolio.html, process.html,     GENERATED — do not
pricing.html, faq.html, contact.html, privacy.html,           hand-edit these,
terms.html                                                     edit src/ instead
404.html               Not-found page — standalone, not part of the build

assets/
  css/style.css        All styles (design tokens, dark mode, components)
  js/main.js           Shared behavior (theme toggle, mobile nav, scroll reveal,
                       portfolio filter, contact form, navbar scroll state)
  icons/sprite.svg     One <symbol> per icon used on the site, referenced via
                       <svg><use href="assets/icons/sprite.svg#icon-name"></use></svg>
  img/portfolio/       Portfolio screenshots go here (see naming convention below)

favicon.ico, logo.svg, apple-touch-icon.png, og-image.png,
manifest.webmanifest, robots.txt, browserconfig.xml   Brand/PWA assets, referenced with relative paths
```

Shared markup (nav, footer, `<head>` boilerplate, GA4, schema) lives once in `src/partials/`. Change your phone number or a nav link there and run `node build.js` — it updates all 9 pages at once, instead of hand-editing every `.html` file.

## Editing content

- **Shared nav/footer/head/analytics/schema** → edit the relevant file in `src/partials/`.
- **A page's title, meta description, or OG tags** → edit `src/pages/<page>.head.html`.
- **A page's actual body content** → edit `src/pages/<page>.content.html`.
- After editing anything in `src/`, run `node build.js` to regenerate the root `.html` files, then commit both the `src/` change and the regenerated output.

The root `.html` files (`index.html`, `services.html`, etc.) are build output — don't hand-edit them, your changes will be overwritten next time someone runs `node build.js` (CI also rebuilds on every deploy, see below). `404.html` is the one exception — it's a standalone page outside the build system since it doesn't share the nav/footer.

Shared look-and-feel lives in `assets/css/style.css`; shared behavior lives in `assets/js/main.js` — neither is part of the build, edit those directly as before.

## Dark mode

Dark mode is class-based (`.dark` on `<html>`), toggled from the navbar, persisted to `localStorage`, and defaults to the visitor's OS preference. A small inline script at the top of every page's `<body>` applies the class before paint to avoid a flash of the wrong theme.

## Portfolio device mockups

Each portfolio project shows both a laptop mockup (desktop screenshot) and an iPhone mockup (mobile screenshot), stacked together. Drop screenshots into `assets/img/portfolio/` using this naming convention:

```
assets/img/portfolio/<project-slug>-desktop.jpg   (recommended ~1280x800)
assets/img/portfolio/<project-slug>-mobile.jpg    (recommended ~390x844)
```

The current slugs (matching `portfolio.html` and the homepage preview) are: `harvest-oak`, `sterling-contracting`, `brightside-dental`, `evergreen-landscaping`, `summit-roofing`, `whitmore-law`, `precision-auto`. Until real screenshots exist at those paths, each device frame shows an abstract gradient placeholder automatically — no markup changes needed once you add the real files.

## Business photography examples

The "Business Photography" add-on section on `pricing.html` shows six example photo tiles (Team, Staff, Building, Products, Services, Interior). Drop real photos into `assets/img/photography/` using these exact filenames:

```
assets/img/photography/team.jpg
assets/img/photography/staff.jpg
assets/img/photography/building.jpg
assets/img/photography/products.jpg
assets/img/photography/services.jpg
assets/img/photography/interior.jpg
```

Recommended ~800x800 (square). Same as the portfolio shots — each tile falls back to a gradient placeholder until a file exists at its path, so there's nothing else to wire up.

See `IMAGE_PROMPTS.md` for AI prompts to generate the OG/share image and iOS/Android home-screen icons.

## Running locally

If you edited anything in `src/`, rebuild first, then serve the folder so relative paths and fetches behave like they will on GitHub Pages:

```bash
node build.js
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

### Option A — GitHub Actions (already set up, recommended)

`.github/workflows/deploy.yml` runs `node build.js` and deploys the repo root on every push to `main` — so even if you forget to rebuild locally before committing, the live site always reflects the current `src/`.

1. Push this repo to GitHub.
2. In the repo settings, go to **Pages** → set **Source** to **GitHub Actions**.
3. Push to `main` — the site builds and deploys automatically.

### Option B — "Deploy from a branch"

Since GitHub Pages' "deploy from a branch" mode serves the repo root as-is with no build step, you must run `node build.js` locally and commit the regenerated `.html` files before pushing — the deployed site will otherwise be stale.

1. Run `node build.js` and commit the result.
2. Push this repo to GitHub.
3. Repo settings → **Pages** → **Source** → **Deploy from a branch** → branch `main`, folder `/ (root)`.

### Custom domain

1. Add a `CNAME` file at the repo root containing your domain (e.g. `blackmaple.co`).
2. Point your domain's DNS at GitHub Pages (A/AAAA records to GitHub's IPs, or a `CNAME` record to `<username>.github.io` for a subdomain).
3. Set the custom domain in the repo's **Pages** settings.

If instead you're hosting at the default project-page URL (`username.github.io/repo-name/`), no changes are needed — every link in the site uses relative paths (`services.html`, `assets/css/style.css`, etc.), so it works at any subpath automatically. The only absolute URLs are the `canonical`/`og:url` meta tags in each page's `<head>`, which are placeholder (`https://blackmaple.co/...`) — update those (find-and-replace) once you know your real domain.

## Notes

- The contact form is front-end only (no backend). Submitting shows a simulated success state; wire it up to a form service (Formspree, Getform, etc.) or your own endpoint when ready.
- The footer's Facebook/Instagram/LinkedIn links (`src/partials/footer.html`) are still placeholders (`https://facebook.com`, etc.) — swap in real profile URLs when you have them.
- Replace `og-image.png`, `favicon.ico`, `apple-touch-icon.png`, and `logo.svg` with final branded assets when ready — see `IMAGE_PROMPTS.md` for ready-to-use AI generation prompts.
