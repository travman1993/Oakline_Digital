# Oakline Digital

Marketing website for Oakline Digital — a web design agency helping local businesses grow online.

Fully static site: **React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + React Router + Lucide Icons**. No backend, database, auth, or CMS.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Project structure

```
public/                 Static assets served as-is (favicon, og-image, manifest, logo)
src/
  assets/               Imported images/media
  components/
    ui/                 Reusable primitives (Button, Container, Badge, Reveal, Logo, PageHeader, ...)
    layout/             Navbar, Footer
    home/                Hero, PhoneMockup, PWASection, WhyChooseUs (home-page only pieces)
    sections/            Services, Pricing, Portfolio, Process, Faq, Contact, CtaBanner (reused across pages)
  pages/                One component per route
  hooks/                useTheme (dark mode)
  lib/                  data.ts (all site copy/content), utils.ts (cn helper)
  App.tsx               Route table
  main.tsx              App bootstrap (BrowserRouter, StrictMode)
```

Content (services, pricing, portfolio items, FAQ, process steps) lives in `src/lib/data.ts` — edit that file to update copy without touching components.

## Dark mode

Dark mode is class-based (`.dark` on `<html>`), toggled from the navbar, persisted to `localStorage`, and defaults to the visitor's OS preference. An inline script in `index.html` applies the class before paint to avoid a flash of the wrong theme.

## Building

```bash
npm run build
```

Runs a type check, builds to `dist/`, and copies `dist/index.html` to `dist/404.html` so client-side routes work on GitHub Pages (which has no server-side rewrite rules).

## Deploying to GitHub Pages

### Option A — GitHub Actions (recommended)

A workflow at `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

1. Push this repo to GitHub.
2. In the repo settings, go to **Pages** → set **Source** to **GitHub Actions**.
3. Push to `main` — the site deploys automatically.

### Option B — `gh-pages` branch

```bash
npm run deploy
```

Publishes `dist/` to the `gh-pages` branch using the `gh-pages` package. Set **Pages** → **Source** to **Deploy from a branch** → `gh-pages`.

### Custom domain

1. Add a `public/CNAME` file containing your domain (e.g. `oaklinedigital.com`) — it will be copied into `dist/` on build.
2. Point your domain's DNS at GitHub Pages (A/AAAA records to GitHub's IPs, or a `CNAME` record to `<username>.github.io` for a subdomain).
3. Set the custom domain in the repo's **Pages** settings.

`vite.config.ts` sets `base: '/'`, which is correct for a custom domain (or a user/org page `username.github.io`). If deploying to a **project page** without a custom domain (`username.github.io/repo-name`), change `base` to `'/repo-name/'`.

## Notes

- The contact form is front-end only (no backend). Submitting shows a simulated success state; wire it up to a form service (Formspree, Getform, etc.) or your own endpoint when ready.
- Replace the placeholder phone number, email, address, and social links in `src/lib/data.ts`, `Footer.tsx`, and `Contact.tsx`.
- Replace `og-image.png`, `favicon.ico`, `apple-touch-icon.png`, and `logo.svg` in `public/` with final branded assets when available — current versions are generated placeholders matching the site's brand palette.
