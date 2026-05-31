const fs = require('fs');

const html = fs.readFileSync('pages/privacy-policy.html', 'utf8');
const i18nPath = 'js/i18n.js';

// Match all data-i18n attributes with their text content
const regex = /<[^>]*data-i18n="(pp\.[^"]+)"[^>]*>([^<]+)<\//g;
let match;
const translations = {};

while ((match = regex.exec(html)) !== null) {
    const key = match[1];
    const text = match[2].trim();
    if (text && !translations[key]) {
        translations[key] = text;
    }
}

console.log(`Found ${Object.keys(translations).length} pp translations`);

// Read current i18n.js
const i18nContent = fs.readFileSync(i18nPath, 'utf8');
const languages = ['en', 'zh', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar'];

let newTranslations = '\n// Privacy Policy translations\n';
let addedCount = 0;

for (const [key, enText] of Object.entries(translations)) {
    if (i18nContent.includes(`'${key}'`)) {
        continue;
    }
    addedCount++;
    newTranslations += `TRANSLATIONS['${key}'] = {\n`;
    for (const lang of languages) {
        const escaped = enText.replace(/'/g, "\\'");
        newTranslations += `    '${lang}': '${escaped}',\n`;
    }
    newTranslations += '};\n\n';
}

if (addedCount > 0) {
    const insertPos = i18nContent.lastIndexOf('console.log');
    const updated = i18nContent.slice(0, insertPos) + newTranslations + i18nContent.slice(insertPos);
    fs.writeFileSync(i18nPath, updated, 'utf8');
    console.log(`Added ${addedCount} new translations.`);
} else {
    console.log('No new translations to add.');
}
