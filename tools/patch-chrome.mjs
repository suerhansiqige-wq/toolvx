/**
 * Applies unified nav, footer, cookie banner, and site assets to HTML pages.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function navHtml(paths, active) {
  const a = (key, label, href) => {
    const cls = active === key ? 'text-blue-300' : 'hover:text-blue-300 transition';
    return `<a href="${href}" class="${cls}">${label}</a>`;
  };
  return `<nav class="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4">
            <div class="site-header-nav py-3">
                <a href="${paths.home}" class="site-header-logo flex items-center gap-2 shrink-0">
                    <img src="${paths.logo}" alt="toolvx" class="h-8 w-auto" />
                </a>
                <div class="site-header-links hidden md:flex items-center">
                    ${a('home', 'Home', paths.home)}
                    ${a('blog', 'Blog', paths.blog)}
                    ${a('features', 'Features', paths.features)}
                    ${a('faq', 'FAQ', paths.faq)}
                    ${a('about', 'About', paths.about)}
                </div>
                <div class="site-header-end">
                    <button id="mobile-menu-toggle" type="button" class="md:hidden p-2 rounded-lg hover:bg-slate-800" aria-label="Open menu" aria-expanded="false">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                    </button>
                </div>
            </div>
            <div id="mobile-menu-panel" class="site-nav-mobile-panel md:hidden pb-4 border-t border-slate-700">
                <div class="flex flex-col gap-3 pt-4 text-sm font-medium">
                    ${a('home', 'Home', paths.home)}
                    ${a('blog', 'Blog', paths.blog)}
                    ${a('features', 'Features', paths.features)}
                    ${a('faq', 'FAQ', paths.faq)}
                    ${a('about', 'About', paths.about)}
                    <a href="${paths.contact}" class="hover:text-blue-300 transition">Contact</a>
                    <a href="${paths.privacy}" class="hover:text-blue-300 transition">Privacy Policy</a>
                </div>
            </div>
        </div>
    </nav>`;
}

function footerHtml(paths) {
  return `<footer class="bg-gray-800 text-white py-12 mt-12">
        <div class="max-w-6xl mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <img src="${paths.logo}" alt="" class="h-6 w-auto opacity-90" width="24" height="24" />
                        <span class="text-xl font-bold">toolvx</span>
                    </div>
                    <p class="text-sm text-gray-400 leading-relaxed">Free, local image and PDF redaction tools. Your files never leave your device.</p>
                </div>
                <div>
                    <h3 class="font-semibold mb-4 text-white">Quick Links</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="${paths.home}" class="text-gray-400 hover:text-white transition">Home</a></li>
                        <li><a href="${paths.blog}" class="text-gray-400 hover:text-white transition">Blog</a></li>
                        <li><a href="${paths.features}" class="text-gray-400 hover:text-white transition">Features</a></li>
                        <li><a href="${paths.about}" class="text-gray-400 hover:text-white transition">About</a></li>
                        <li><a href="${paths.faq}" class="text-gray-400 hover:text-white transition">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-4 text-white">Popular Articles</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="${paths.artBlur}" class="text-gray-400 hover:text-white transition">Blur Faces Guide</a></li>
                        <li><a href="${paths.artSocial}" class="text-gray-400 hover:text-white transition">Privacy Guide</a></li>
                        <li><a href="${paths.artRedact}" class="text-gray-400 hover:text-white transition">Face Redaction Guide</a></li>
                        <li><a href="${paths.artPdf}" class="text-gray-400 hover:text-white transition">PDF Redaction Tools</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-4 text-white">Legal</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="${paths.privacy}" class="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="${paths.terms}" class="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                        <li><a href="${paths.cookie}" class="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
                        <li><a href="${paths.contact}" class="text-gray-400 hover:text-white transition">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 pt-8 text-center">
                <p class="text-sm text-gray-400">&copy; 2026 toolvx.com — Free online image and PDF redaction tools. All rights reserved.</p>
            </div>
        </div>
    </footer>`;
}

function cookieHtml(paths) {
  return `<div id="cookie-consent">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-4 justify-between px-4">
            <p class="text-sm leading-relaxed">We use cookies for advertising (Google AdSense). By clicking Accept, you consent to ad cookies as described in our <a href="${paths.cookie}">Cookie Policy</a> and <a href="${paths.privacy}">Privacy Policy</a>.</p>
            <div class="flex gap-3 shrink-0">
                <button id="cookie-decline" type="button" class="px-4 py-2 text-sm rounded-lg border border-slate-500 hover:bg-slate-800 transition">Decline</button>
                <button id="cookie-accept" type="button" class="px-4 py-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition">Accept</button>
            </div>
        </div>
    </div>
    <script src="${paths.siteJs}"></script>`;
}

const authorBox = `<section class="mt-12 pt-8 border-t border-gray-200">
            <h2 class="text-2xl font-bold text-gray-900 mb-3">About This Article</h2>
            <p class="text-gray-600 leading-relaxed mb-4">Written by the <strong>toolvx Editorial Team</strong>, a group focused on practical privacy workflows for individuals and small teams. We test redaction techniques locally before publishing and update guides when browser capabilities or regulations change.</p>
            <p class="text-gray-600 leading-relaxed">Questions or corrections: <a href="mailto:admin@toolvx.com" class="text-blue-600 hover:underline">admin@toolvx.com</a>. See our <a href="../pages/about.html" class="text-blue-600 hover:underline">About page</a> for editorial standards.</p>
        </section>`;

function ensureHeadAssets(html) {
  if (!html.includes('site.css')) {
    html = html.replace('</head>', '    <link rel="stylesheet" href="../css/site.css">\n</head>');
  }
  if (!html.includes('favicon.svg')) {
    html = html.replace('</head>', '    <link rel="icon" type="image/svg+xml" href="../favicon.svg">\n</head>');
  }
  return html;
}

function replaceNavFooterCookie(html, paths, active) {
  html = html.replace(/<nav[\s\S]*?<\/nav>/, navHtml(paths, active));
  html = html.replace(/<footer[\s\S]*?<\/footer>/, footerHtml(paths));
  html = html.replace(/<div id="cookie-consent">[\s\S]*?<\/div>\s*(<script src="[^"]*site\.js"><\/script>)?/g, '');
  html = html.replace(/\s*<script src="[^"]*site\.js"><\/script>\s*/g, '\n');
  html = html.replace(/<\/body>/, '\n' + cookieHtml(paths) + '\n</body>');
  return html;
}

const pagesConfig = {
  'pages/about.html': 'about',
  'pages/features.html': 'features',
  'pages/faq.html': 'faq',
  'pages/contact.html': 'contact',
  'pages/privacy-policy.html': 'privacy',
  'pages/terms-of-service.html': 'terms',
  'pages/cookie-policy.html': 'cookie',
};

const pagesPaths = {
  home: '../index.html',
  blog: '../articles/blog.html',
  features: 'features.html',
  faq: 'faq.html',
  about: 'about.html',
  contact: 'contact.html',
  privacy: 'privacy-policy.html',
  terms: 'terms-of-service.html',
  cookie: 'cookie-policy.html',
  logo: '../logo.svg',
  siteJs: '../js/site.js',
  artBlur: '../articles/how-to-blur-faces-in-photos.html',
  artSocial: '../articles/social-media-privacy-guide.html',
  artRedact: '../articles/how-to-redact-faces-in-photos.html',
  artPdf: '../articles/best-free-pdf-redaction-tools.html',
};

const articlesPaths = {
  home: '../index.html',
  blog: 'blog.html',
  features: '../pages/features.html',
  faq: '../pages/faq.html',
  about: '../pages/about.html',
  contact: '../pages/contact.html',
  privacy: '../pages/privacy-policy.html',
  terms: '../pages/terms-of-service.html',
  cookie: '../pages/cookie-policy.html',
  logo: '../logo.svg',
  siteJs: '../js/site.js',
  artBlur: 'how-to-blur-faces-in-photos.html',
  artSocial: 'social-media-privacy-guide.html',
  artRedact: 'how-to-redact-faces-in-photos.html',
  artPdf: 'best-free-pdf-redaction-tools.html',
};

for (const [rel, active] of Object.entries(pagesConfig)) {
  const fp = path.join(root, rel);
  let html = fs.readFileSync(fp, 'utf8');
  html = ensureHeadAssets(html);
  html = replaceNavFooterCookie(html, pagesPaths, active === 'privacy' || active === 'terms' || active === 'cookie' || active === 'contact' ? null : active);
  fs.writeFileSync(fp, html);
  console.log('Patched', rel);
}

const articleFiles = fs.readdirSync(path.join(root, 'articles')).filter((f) => f.endsWith('.html'));
for (const file of articleFiles) {
  const fp = path.join(root, 'articles', file);
  let html = fs.readFileSync(fp, 'utf8');
  html = ensureHeadAssets(html);
  const active = file === 'blog.html' ? 'blog' : null;
  html = replaceNavFooterCookie(html, articlesPaths, active);
  if (file !== 'blog.html' && !html.includes('toolvx Editorial Team')) {
    html = html.replace(/(\s*<\/article>)/, authorBox + '$1');
    html = html.replace(/Privacy Expert/g, 'toolvx Editorial Team');
  }
  fs.writeFileSync(fp, html);
  console.log('Patched articles/' + file);
}

console.log('Done.');
