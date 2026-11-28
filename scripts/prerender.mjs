// Prerenders the portfolio to static HTML after `vite build` and `vite build --ssr`.
// Visitors and crawlers get real content on first paint; the client bundle then hydrates it.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// Use React's production server renderer (smaller output, no development-only warnings).
process.env.NODE_ENV ??= "production";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const rootMarker = '<div id="root"></div>';

const builtHtml = await fs.readFile(path.join(distDir, "index.html"), "utf8");
if (!builtHtml.includes(rootMarker)) throw new Error(`Prerender: ${rootMarker} not found in dist/index.html`);

// Load the main stylesheet without blocking first paint, so the inline page loader shows as soon as the
// HTML arrives on slow networks. The loader covers the page until the stylesheet has been applied.
const stylesheetLink = /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g;
const template = builtHtml.replace(
  stylesheetLink,
  (_, href) =>
    `<link rel="preload" as="style" crossorigin href="${href}" onload="this.onload=null;this.rel='stylesheet'">\n    ` +
    `<noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`,
);
if (template === builtHtml) throw new Error("Prerender: main stylesheet link not found in dist/index.html");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
// `data-route` tells src/main.tsx which route the markup belongs to, so it only hydrates matching HTML.
const withApp = (html, route) => template.replace(rootMarker, `<div id="root" data-route="${route}">${html}</div>`);

await fs.writeFile(path.join(distDir, "index.html"), withApp(render("/"), "home"));

// Static hosts (Vercel included) serve 404.html for unknown paths.
const notFound = withApp(render("/404"), "not-found")
  .replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex" />')
  .replace(/\s*<link rel="canonical"[^>]*>/, "");
await fs.writeFile(path.join(distDir, "404.html"), notFound);

await fs.rm(ssrDir, { recursive: true, force: true });
console.log("Prerendered dist/index.html and dist/404.html");
