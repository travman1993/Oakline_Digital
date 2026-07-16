#!/usr/bin/env node
// Stitches src/partials/ + src/pages/ into static HTML files at the repo root.
// No dependencies, no bundler — just string concatenation. Run: node build.js

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');

const PAGES = ['index', 'services', 'portfolio', 'process', 'pricing', 'faq', 'contact', 'privacy', 'terms'];
const NAV_SLUGS = ['index', 'services', 'portfolio', 'process', 'pricing', 'faq', 'contact'];

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

function renderNav(currentPage) {
  let nav = partial.navTemplate;
  for (const slug of NAV_SLUGS) {
    const token = `{{ACTIVE:${slug}}}`;
    nav = nav.split(token).join(slug === currentPage ? ' class="is-active"' : '');
  }
  return nav;
}

for (const page of PAGES) {
  const head = read(`pages/${page}.head.html`);
  const content = read(`pages/${page}.content.html`);

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
    renderNav(page) +
    '\n' +
    content +
    '\n' +
    partial.footer +
    '\n' +
    partial.bodyBottom;

  fs.writeFileSync(path.join(ROOT, `${page}.html`), html);
  console.log(`built ${page}.html`);
}
