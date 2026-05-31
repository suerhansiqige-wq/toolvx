const fs = require('fs');

const i18nPath = 'js/i18n.js';
const htmlPath = 'pages/privacy-policy.html';

// Read HTML to extract keys and English text
const html = fs.readFileSync(htmlPath, 'utf8');
const regex = /data-i18n="(pp\.[^"]+)"[^>]*>([^<]+)/g;
let match;
const translations = {};

while ((match = regex.exec(html)) !== null) {
    const key = match[1];
    const text = match[2].trim();
    if (!translations[key]) {
        translations[key] = text;
    }
}

// Read current i18n.js to check existing keys
const i18nContent = fs.readFileSync(i18nPath, 'utf8');

// Generate translation entries for each key
let newTranslations = '\n// Privacy Policy translations\n';
const languages = ['en', 'zh', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar'];

for (const [key, enText] of Object.entries(translations)) {
    if (i18nContent.includes(`'${key}'`)) {
        continue; // Skip if already exists
    }
    newTranslations += `TRANSLATIONS['${key}'] = {\n`;
    for (const lang of languages) {
        let text = enText;
        // For non-English, we keep the English text as placeholder
        // User can later replace with actual translations
        newTranslations += `    '${lang}': '${text.replace(/'/g, "\\'")}',\n`;
    }
    newTranslations += '};\n\n';
}

// Append to i18n.js before the last line
const insertPosition = i18nContent.lastIndexOf('console.log');
const updatedContent = i18nContent.slice(0, insertPosition) + newTranslations + i18nContent.slice(insertPosition);

fs.writeFileSync(i18nPath, updatedContent, 'utf8');
console.log(`Added ${Object.keys(translations).length} privacy policy translations.`);
