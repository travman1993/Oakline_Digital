# Oakline Digital

Marketing website for Oakline Digital — a web design agency helping local businesses grow online.

Plain **HTML + CSS + JavaScript**. No framework, no build step, no `npm install`. Every page is a hand-written `.html` file at the repo root that you can open directly in a browser or push straight to GitHub Pages.

## Project structure

```
index.html          Home
services.html        Services
portfolio.html        Portfolio (with device mockups, see below)
process.html          Process
pricing.html          Pricing
faq.html              FAQ
contact.html          Contact
privacy.html / terms.html   Legal placeholders
404.html               Not-found page

assets/
  css/style.css        All styles (design tokens, dark mode, components)
  js/main.js           Shared behavior (theme toggle, mobile nav, scroll reveal,
                       portfolio filter, contact form, navbar scroll state)
  icons/sprite.svg     One <symbol> per icon used on the site, referenced via
                       <svg><use href="assets/icons/sprite.svg#icon-name"></use></svg>
  img/portfolio/       Portfolio screenshots go here (see naming convention below)

favicon.ico, logo.svg, apple-touch-icon.png, og-image.png,
manifest.webmanifest, robots.txt   Brand/PWA assets, referenced with relative paths
```

Each page repeats its own `<head>`, header nav, and footer markup — there's no templating engine, so updating something in the nav or footer means editing it in every `.html` file. That's the tradeoff for zero build tooling.

## Editing content

Just edit the relevant `.html` file directly — services, pricing, FAQ, portfolio, etc. are all inline markup, not pulled from a data file. Shared look-and-feel lives in `assets/css/style.css`; shared behavior lives in `assets/js/main.js`.

## Dark mode

Dark mode is class-based (`.dark` on `<html>`), toggled from the navbar, persisted to `localStorage`, and defaults to the visitor's OS preference. A small inline script at the top of every page's `<body>` applies the class before paint to avoid a flash of the wrong theme.

## Portfolio device mockups

Each portfolio project shows both a laptop mockup (desktop screenshot) and an iPhone mockup (mobile screenshot), stacked together. Drop screenshots into `assets/img/portfolio/` using this naming convention:

```
assets/img/portfolio/<project-slug>-desktop.jpg   (recommended ~1280x800)
assets/img/portfolio/<project-slug>-mobile.jpg    (recommended ~390x844)
```

The current slugs (matching `portfolio.html` and the homepage preview) are: `harvest-oak`, `sterling-contracting`, `brightside-dental`, `evergreen-landscaping`, `summit-roofing`, `whitmore-law`, `precision-auto`. Until real screenshots exist at those paths, each device frame shows an abstract gradient placeholder automatically — no markup changes needed once you add the real files.

See `IMAGE_PROMPTS.md` for AI prompts to generate the OG/share image and iOS/Android home-screen icons.

## Running locally

No build step — just serve the folder so relative paths and fetches behave like they will on GitHub Pages (double-clicking `index.html` mostly works, but a local server is safer):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

### Option A — GitHub Actions (already set up)

`.github/workflows/deploy.yml` uploads the repo root and deploys it on every push to `main` — no build step to run.

1. Push this repo to GitHub.
2. In the repo settings, go to **Pages** → set **Source** to **GitHub Actions**.
3. Push to `main` — the site deploys automatically.

### Option B — "Deploy from a branch" (simplest, zero config)

Since there's nothing to build, you can skip Actions entirely:

1. Push this repo to GitHub.
2. Repo settings → **Pages** → **Source** → **Deploy from a branch** → branch `main`, folder `/ (root)`.

### Custom domain

1. Add a `CNAME` file at the repo root containing your domain (e.g. `oaklinedigital.com`).
2. Point your domain's DNS at GitHub Pages (A/AAAA records to GitHub's IPs, or a `CNAME` record to `<username>.github.io` for a subdomain).
3. Set the custom domain in the repo's **Pages** settings.

If instead you're hosting at the default project-page URL (`username.github.io/repo-name/`), no changes are needed — every link in the site uses relative paths (`services.html`, `assets/css/style.css`, etc.), so it works at any subpath automatically. The only absolute URLs are the `canonical`/`og:url` meta tags in each page's `<head>`, which are placeholder (`https://oaklinedigital.com/...`) — update those (find-and-replace) once you know your real domain.

## Notes

- The contact form is front-end only (no backend). Submitting shows a simulated success state; wire it up to a form service (Formspree, Getform, etc.) or your own endpoint when ready.
- Replace the placeholder phone number, email, address, and social links — they appear in the header of `contact.html` and in the footer block repeated at the bottom of every page.
- Replace `og-image.png`, `favicon.ico`, `apple-touch-icon.png`, and `logo.svg` with final branded assets when ready — see `IMAGE_PROMPTS.md` for ready-to-use AI generation prompts.
