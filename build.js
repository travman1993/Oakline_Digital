#!/usr/bin/env node
// Stitches src/partials/ + src/pages/ into static HTML files at the repo root.
// No dependencies, no bundler — just string concatenation. Run: node build.js

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');
const CONTENT_MARKER = '<!-- CONTENT -->';

// name: path (relative to src/pages/ and to the repo root) of a single <name>.html source file
// — nested names create nested output dirs. Each source file holds the <head> block, then a
// lone `<!-- CONTENT -->` marker line, then the <main> body.
// active: which nav link should get is-active (matches an ACTIVE_SLUGS entry below).
const PAGES = [
  { name: 'index', active: 'index' },
  { name: 'services', active: 'services' },
  { name: 'portfolio', active: 'portfolio' },
  { name: 'photography/index', active: 'photography' },
  { name: 'process', active: 'process' },
  { name: 'pricing', active: 'pricing' },
  { name: 'faq', active: 'faq' },
  { name: 'contact', active: 'contact' },
  { name: 'privacy', active: 'privacy' },
  { name: 'terms', active: 'terms' },
];
const ACTIVE_SLUGS = ['index', 'services', 'portfolio', 'photography', 'process', 'pricing', 'faq', 'contact'];

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

// Splits a single page source file into its <head> block and <main> content on the
// `<!-- CONTENT -->` marker line.
function splitPage(absPath, displayPath) {
  const raw = fs.readFileSync(absPath, 'utf8');
  const markerIndex = raw.indexOf(CONTENT_MARKER);
  if (markerIndex === -1) {
    throw new Error(`${displayPath} is missing the ${CONTENT_MARKER} marker separating head from content`);
  }
  return {
    head: raw.slice(0, markerIndex).trim(),
    content: raw.slice(markerIndex + CONTENT_MARKER.length),
  };
}

function buildPage(name, active, head, content) {
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
    renderNav(active) +
    '\n' +
    content +
    '\n' +
    partial.footer +
    '\n' +
    partial.bodyBottom;

  const outPath = path.join(ROOT, `${name}.html`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`built ${name}.html`);
}

for (const page of PAGES) {
  const { head, content } = splitPage(path.join(SRC, 'pages', `${page.name}.html`), `src/pages/${page.name}.html`);
  buildPage(page.name, page.active, head, content);
}
