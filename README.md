# toolvx — Free Local Image & PDF Redaction

Privacy-first desensitization tool: blur faces, mask text, sanitize PDFs — 100% in your browser, zero server uploads. **Local image and PDF redaction only** — not a creative photo or document tool.

**Live site:** [toolvx.com](https://toolvx.com)

## Features

- Image redaction (JPG, PNG, GIF, WebP)
- Multi-page PDF redaction and export
- Mosaic, gaussian blur, and solid blackout effects
- Custom color fills, undo/redo, mobile touch support
- Keyboard shortcuts: `Ctrl+Z` undo, `Ctrl+Y` / `Ctrl+Shift+Z` redo

## Language

This site is **English-only**. All UI copy lives in HTML and `js/tool.js` — no i18n layer.

## Deploy on GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages → Build and deployment**
3. Source: **GitHub Actions** (`.github/workflows/pages.yml`)
4. Push to `main` — the site deploys automatically
5. Optional: add custom domain `toolvx.com` in Pages settings and configure DNS

## Google AdSense Checklist

Site is pre-configured for AdSense review:

- [x] Privacy / Cookie / Terms / About / Contact pages with AdSense disclosure
- [x] Cookie consent banner on all pages (AdSense loads only after Accept)
- [x] `ads.txt` with publisher ID `pub-2114298424481408`
- [x] `.nojekyll` for correct sitemap delivery on GitHub Pages
- [x] Unified navigation, footer, and expanded blog content
- [ ] **Deploy**: push to `main` so GitHub Actions updates toolvx.com
- [ ] Submit `https://toolvx.com/sitemap.xml` in Google Search Console
- [ ] Wait 2–4 weeks for indexing, then re-apply to AdSense

AdSense script loading is handled by `js/site.js` after cookie consent — no manual `<head>` snippet required unless you add visible ad unit placeholders.

## Project Structure

```
├── index.html          # Main redaction tool
├── pages/              # About, legal, FAQ, features, contact
├── articles/           # Blog posts
├── js/
│   ├── tool.js         # Redaction tool logic (~1050 lines)
│   └── site.js         # Mobile nav + cookie consent
├── css/site.css        # Shared layout styles
├── sitemap.xml
├── robots.txt
└── ads.txt
```

## Local Development

```bash
npx serve .
```

Then open `http://localhost:3000`.

## License

All rights reserved © 2026 toolvx.com
