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
    studio/                Studio section source (see "Adding new content" below)
    sports/                 Sports section source (same pattern)

build.js               Reads src/ and writes index.html, services.html, etc.
                        (registered in build.js's PAGES array) to the repo root,
                        including nested output like studio/index.html and
                        sports/nfl/index.html. Run `node build.js` after any src/ edit.

index.html, services.html, portfolio.html, process.html,     GENERATED — do not
pricing.html, faq.html, contact.html, privacy.html, terms.html,  hand-edit these,
studio/, sports/                                                  edit src/ instead
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

All shared partials (`nav.html`, `footer.html`, `head-assets.html`, `body-bottom.html`) and `main.js` use **root-absolute paths** (`/assets/...`, `/index.html`), so they work unchanged no matter how deeply nested a page is (e.g. `studio/journal/goodnight-dad.html`). This relies on the site being served from the domain root (`blackmaple.co/`), not a subpath.

## Adding new content (Studio / Sports)

### A Production Journal entry for an existing film

1. Open `src/pages/studio/journal/<film-slug>.content.html`.
2. Copy one of the existing dated entry blocks and paste it **at the top** (newest first); edit the date and bullets.
3. Run `node build.js`.

### A new film (and its journal)

1. Copy `src/pages/studio/goodnight-dad.head.html` + `.content.html` → `src/pages/studio/<new-slug>.head.html` + `.content.html`; edit synopsis/cast/credits.
2. Copy `src/pages/studio/journal/goodnight-dad.head.html` + `.content.html` → `src/pages/studio/journal/<new-slug>.head.html` + `.content.html`; clear the example entries.
3. Register both in `build.js`'s `PAGES` array: `{ name: 'studio/<new-slug>', active: 'studio' }` and `{ name: 'studio/journal/<new-slug>', active: 'studio' }`.
4. Update the film's card in `src/pages/studio/index.content.html` to link to it instead of showing "Coming Soon".
5. Run `node build.js`.

### A Studio Blog post

1. Copy `src/pages/sports/article-template.head.html` + `.content.html` → `src/pages/studio/blog/<post-slug>.head.html` + `.content.html` (closest existing layout — hero + body).
2. Register it in `build.js`: `{ name: 'studio/blog/<post-slug>', active: 'studio' }`.
3. Set `<meta name="robots">` to `index, follow`.
4. Add a real post card to `src/pages/studio/blog/index.content.html`, replacing the empty-state card.
5. Run `node build.js`.

### A Sports article under a category

1. Copy `src/pages/sports/article-template.head.html` + `.content.html` → `src/pages/sports/<category>/<article-slug>.head.html` + `.content.html`. Categories: `nfl`, `detroit-lions`, `michigan-football`, `draft`, `trades`, `contracts`.
2. Set `<meta name="robots">` to `index, follow` (the template defaults to `noindex, nofollow`).
3. Register it in `build.js`: `{ name: 'sports/<category>/<article-slug>', active: 'sports' }`.
4. Add a real article card to `src/pages/sports/<category>/index.content.html`, replacing its empty state, and flip **that category page's** robots meta to `index, follow` too now that it has content.
5. Optionally add a card to `src/pages/sports/index.content.html`'s "Latest Stories" section.
6. Run `node build.js`.

Every workflow above ends with `node build.js`, then committing both the `src/` change and the regenerated output.

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

The site currently assumes it's served from the domain root (`blackmaple.co/`) — shared partials and `main.js` use root-absolute paths (`/assets/...`). If you ever move off a custom domain to the default project-page URL (`username.github.io/repo-name/`), those absolute paths would need to become relative or prefixed with `/repo-name`, since they'd otherwise point at the wrong subpath.

## Notes

- The contact form is front-end only (no backend). Submitting shows a simulated success state; wire it up to a form service (Formspree, Getform, etc.) or your own endpoint when ready.
- The footer's Facebook/Instagram/LinkedIn links (`src/partials/footer.html`) are still placeholders (`https://facebook.com`, etc.) — swap in real profile URLs when you have them.
- Replace `og-image.png`, `favicon.ico`, `apple-touch-icon.png`, and `logo.svg` with final branded assets when ready — see `IMAGE_PROMPTS.md` for ready-to-use AI generation prompts.
