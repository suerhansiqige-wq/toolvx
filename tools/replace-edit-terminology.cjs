/**
 * Replace "edit/editor/editing" product terminology with redaction/desensitization.
 * Preserves "Editorial", "credit card", and similar unrelated matches.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const PROTECT = [
  [/Editorial Team/g, '\x00EDITORIAL_TEAM\x00'],
  [/Editorial standards/g, '\x00EDITORIAL_STANDARDS\x00'],
  [/editorial standards/g, '\x00editorial_standards\x00'],
  [/Editorial &amp; Content Standards/g, '\x00EDITORIAL_CONTENT\x00'],
  [/Editorial & Content Standards/g, '\x00EDITORIAL_CONTENT\x00'],
  [/Credit card/g, '\x00CREDIT_CARD\x00'],
  [/credit card/g, '\x00credit_card\x00'],
  [/credit cards/g, '\x00credit_cards\x00'],
  [/credit reports/g, '\x00credit_reports\x00'],
  [/credit inquiries/g, '\x00credit_inquiries\x00'],
  [/Debit\/Credit/g, '\x00DEBIT_CREDIT\x00'],
  [/Credit Card/g, '\x00CREDIT_CARD_TITLE\x00'],
];

const RESTORE = [
  ['\x00EDITORIAL_TEAM\x00', 'Editorial Team'],
  ['\x00EDITORIAL_STANDARDS\x00', 'Editorial standards'],
  ['\x00editorial_standards\x00', 'editorial standards'],
  ['\x00EDITORIAL_CONTENT\x00', 'Editorial &amp; Content Standards'],
  ['\x00CREDIT_CARD\x00', 'Credit card'],
  ['\x00credit_card\x00', 'credit card'],
  ['\x00credit_cards\x00', 'credit cards'],
  ['\x00credit_reports\x00', 'credit reports'],
  ['\x00credit_inquiries\x00', 'credit inquiries'],
  ['\x00DEBIT_CREDIT\x00', 'Debit/Credit'],
  ['\x00CREDIT_CARD_TITLE\x00', 'Credit Card'],
];

const REPLACEMENTS = [
  ['Local vs Cloud Image Editors: Which is Safer?', 'Local vs Cloud Redaction Tools: Which is Safer?'],
  ['Local vs Cloud Image Editors', 'Local vs Cloud Redaction Tools'],
  ['Cloud-Based Editors: Convenience at What Cost?', 'Cloud-Based Redaction Tools: Convenience at What Cost?'],
  ['Local Browser-Based Editors: The Secure Alternative', 'Local Browser-Based Redaction Tools: The Secure Alternative'],
  ['Edit and redact images (JPG, PNG, GIF, WebP)', 'Redact images (JPG, PNG, GIF, WebP)'],
  ['Edit and redact PDF documents', 'Redact PDF documents'],
  ['Export edited files with original filenames preserved', 'Export redacted files with original filenames preserved'],
  ['upload, process, or edit using', 'upload, process, or redact using'],
  ['upload and edit using', 'upload and redact using'],
  ['edited documents', 'redacted documents'],
  ['page-by-page editing', 'page-by-page redaction'],
  ['our free PDF editor', 'our free PDF redaction tool'],
  ['browser-based editor like', 'browser-based redaction tool like'],
  ['open the image in a browser editor', 'open the image in a browser redaction tool'],
  ['local editor like', 'local redaction tool like'],
  ['cloud-based editors', 'cloud-based redaction tools'],
  ['cloud-based editor', 'cloud-based redaction tool'],
  ['Cloud-based photo editors', 'Cloud-based photo redaction services'],
  ['Most cloud editors', 'Most cloud redaction tools'],
  ['Cloud Editors', 'Cloud Redaction Tools'],
  ['Local Editors', 'Local Redaction Tools'],
  ['Use Cloud Editors For:', 'Use Cloud Redaction Tools For:'],
  ['Use Local Editors For:', 'Use Local Redaction Tools For:'],
  ['When it comes to editing images', 'When it comes to redacting images'],
  ['Edit large files instantly', 'Redact large files instantly'],
  ['download the edited image', 'download the redacted image'],
  ['Review your edits to', 'Review your redactions to'],
  ['you edited a copy', 'you redacted a copy'],
  ['need little editing', 'need little redaction'],
  ['Edit multi-page PDFs', 'Redact multi-page PDFs'],
  ['professional-grade editing with', 'professional-grade redaction with'],
  ['cosmetic editing', 'cosmetic adjustments'],
  ['unedited archive', 'unredacted archive'],
  ['creative editing', 'creative photo manipulation'],
  ['not photo editing', 'not creative photo manipulation'],
  ['Is this a photo editor?', 'Is this for creative photo editing?'],
  [
    'Local data sanitization for images and PDFs — not a general photo editor',
    'Local image and PDF desensitization — specialized redaction, not creative photo tools',
  ],
  [
    'Answers about local image and PDF redaction — data sanitization, not photo editing',
    'Answers about local image and PDF redaction — data desensitization, not creative photo tools',
  ],
  [
    'not a general photo or document editor',
    'not a creative photo or document tool — redaction and desensitization only',
  ],
  ['Can I edit multiple pages in a PDF?', 'Can I redact multiple pages in a PDF?'],
  [
    'local image editor, cloud photo editor, image editing security, privacy comparison, secure photo tools',
    'local image redaction, cloud photo redaction, image desensitization security, privacy comparison, secure redaction tools',
  ],
  ['Find secure, local editors for', 'Find secure, local redaction tools for'],
  ['PDF editor free', 'PDF redaction tool free'],
  ['secure PDF editor', 'secure PDF redaction tool'],
  ['in basic editors', 'in basic PDF tools'],
  ['Many "free PDF editors"', 'Many "free PDF tools"'],
  ['Redaction Tool · Not an Editor', 'Local Image & PDF Redaction'],
  ['Redaction Tool &middot; Not an Editor', 'Local Image &amp; PDF Redaction'],
  [
    'Mask and remove sensitive information from images and PDFs before you share. This is <strong>not</strong> a photo or document editor — it only redacts private data.',
    'Local image and PDF redaction tool. Mask and remove sensitive information before you share — data desensitization only.',
  ],
  [
    'Mask and remove sensitive information from images and PDFs before you share. This is <strong>not</strong> a photo or document editor &mdash; it only redacts private data.',
    'Local image and PDF redaction tool. Mask and remove sensitive information before you share &mdash; data desensitization only.',
  ],
  ['not an editor.', 'redaction and desensitization only.'],
  ['Not a photo or document editor', 'Not a creative photo or document tool — redaction only'],
  ['脱敏工具 · 非编辑器', '本地图像和PDF脱敏'],
  [
    '分享前遮盖并移除图片与 PDF 中的敏感信息。这<strong>不是</strong>图片或文档编辑工具，仅用于数据脱敏。',
    '本地图像和PDF脱敏工具。分享前遮盖并移除图片与 PDF 中的敏感信息。',
  ],
  ['本地图像和 PDF 编辑', '本地图像和 PDF 脱敏'],
  ['本地图像和PDF编辑', '本地图像和PDF脱敏'],
  ['图片和PDF编辑', '图片和PDF脱敏'],
  ['图像和PDF编辑', '图像和PDF脱敏'],
  ['图片或文档编辑', '图像和PDF脱敏'],
  ['文档编辑', '文档脱敏'],
  ['图片编辑', '图像脱敏'],
  ['PDF编辑', 'PDF脱敏'],
  ['编辑工具', '脱敏工具'],
  ['编辑站', '脱敏站'],
  ['编辑器', '脱敏工具'],
];

function protect(text) {
  PROTECT.forEach(function (pair) {
    text = text.replace(pair[0], pair[1]);
  });
  return text;
}

function restore(text) {
  RESTORE.forEach(function (pair) {
    text = text.split(pair[0]).join(pair[1]);
  });
  return text;
}

function transform(content) {
  let text = protect(content);
  REPLACEMENTS.forEach(function (pair) {
    text = text.split(pair[0]).join(pair[1]);
  });
  text = restore(text);

  text = text.replace(
    /<span class="site-header-brand-tag">Local Image &amp; PDF Redaction<\/span>/g,
    '<span class="site-header-brand-tag" data-i18n="site.brand.tag">Local Image &amp; PDF Redaction</span>'
  );

  text = text.replace(
    /<p class="text-sm text-gray-400 leading-relaxed">Free, local image and PDF redaction tools\. Your files never leave your device\.<\/p>/g,
    '<p class="text-sm text-gray-400 leading-relaxed" data-i18n="site.footer.tagline">Free, local image and PDF redaction tools. Your files never leave your device.</p>'
  );

  return text;
}

function walk(dir, out) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (name === 'node_modules' || name === '.git') continue;
      walk(full, out);
    } else if (/\.(html|js|webmanifest|md)$/.test(name)) {
      out.push(full);
    }
  }
}

const files = [];
walk(ROOT, files);

let changed = 0;
files.forEach(function (file) {
  const rel = path.relative(ROOT, file);
  if (rel.startsWith('tools' + path.sep) && !rel.endsWith('replace-edit-terminology.cjs')) {
    if (!rel.includes('add-brand-name')) return;
  }
  const before = fs.readFileSync(file, 'utf8');
  const after = transform(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
    console.log('updated:', rel);
  }
});

console.log('Done. Files changed:', changed);
