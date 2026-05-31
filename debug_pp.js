const fs = require('fs');
const html = fs.readFileSync('pages/privacy-policy.html', 'utf8');
const matches = html.match(/data-i18n="pp\.[^"]+"/g);
console.log('Matches:', matches ? matches.length : 0);
if (matches && matches.length > 0) {
    matches.slice(0, 3).forEach(m => console.log(m));
}
