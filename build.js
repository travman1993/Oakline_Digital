#!/usr/bin/env node
// Stitches src/partials/ + src/pages/ into static HTML files at the repo root.
// No dependencies, no bundler — just string concatenation. Run: node build.js

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');

// name: path (relative to src/pages/ and to the repo root) shared by <name>.head.html,
// <name>.content.html, and the output <name>.html — nested names create nested output dirs.
// active: which nav link should get is-active (matches an ACTIVE_SLUGS entry below).
const PAGES = [
  { name: 'index', active: 'index' },
  { name: 'services', active: 'services' },
  { name: 'portfolio', active: 'portfolio' },
  { name: 'process', active: 'process' },
  { name: 'pricing', active: 'pricing' },
  { name: 'faq', active: 'faq' },
  { name: 'contact', active: 'contact' },
  { name: 'privacy', active: 'privacy' },
  { name: 'terms', active: 'terms' },
  { name: 'studio/index', active: 'studio' },
  { name: 'studio/goodnight-dad', active: 'studio' },
  { name: 'studio/blog/index', active: 'studio' },
  { name: 'sports/index', active: 'sports' },
];
const ACTIVE_SLUGS = ['index', 'services', 'portfolio', 'studio', 'sports', 'process', 'pricing', 'faq', 'contact'];

function read(relPath) {
  return fs.readFileSync(path.join(SRC, relPath), 'utf8');
}

const partial = {
  headTop: read('partials/head-top.html'),
  headAssets: read('partials/head-assets.html'),
  ga4: read('partials/ga4.html'),
  schema: read('partials/schema.html'),
  bodyTop: read('partials/body-top.html'),
  navTemplate: read('partials/nav.html'),
  footer: read('partials/footer.html'),
  bodyBottom: read('partials/body-bottom.html'),
};

function renderNav(activeSlug) {
  let nav = partial.navTemplate;
  for (const slug of ACTIVE_SLUGS) {
    const token = `{{ACTIVE:${slug}}}`;
    nav = nav.split(token).join(slug === activeSlug ? ' class="is-active"' : '');
  }
  return nav;
}

for (const page of PAGES) {
  const head = read(`pages/${page.name}.head.html`);
  const content = read(`pages/${page.name}.content.html`);

  const html =
    partial.headTop +
    '\n' +
    head +
    '\n' +
    partial.headAssets +
    '\n' +
    partial.ga4 +
    '\n' +
    partial.schema +
    '\n</head>\n' +
    partial.bodyTop +
    '\n' +
    renderNav(page.active) +
    '\n' +
    content +
    '\n' +
    partial.footer +
    '\n' +
    partial.bodyBottom;

  const outPath = path.join(ROOT, `${page.name}.html`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`built ${page.name}.html`);
}
