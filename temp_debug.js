const fs = require('fs');

const html = fs.readFileSync('pages/privacy-policy.html', 'utf8');

// Debug: find all data-i18n attributes starting with pp.
const matches = html.match(/data-i18n="pp\.[^"]+"/g);
console.log('Found pp keys:', matches ? matches.length : 0);
if (matches) {
    matches.slice(0, 5).forEach(m => console.log(m));
}
