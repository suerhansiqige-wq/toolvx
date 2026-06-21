const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const MOJ = '\uFFFD?'; // corrupted replacement char + ?

const replacements = [
  [`${MOJ}/a>`, '→</a>'],
  [`${MOJ}/span>`, '▼</span>'],
  ['<li>' + MOJ, '<li>• '],
  ['toolvx ' + MOJ + 'Free', 'toolvx — Free'],
  ['toolvx.com ' + MOJ + 'Free', 'toolvx.com — Free'],
  ['toolvx.com ' + MOJ + 'a free', 'toolvx.com — a free'],
  ['trustworthy ' + MOJ + 'without', 'trustworthy — without'],
  ['blackout ' + MOJ + 'then', 'blackout — then'],
  ['copies ' + MOJ + 'all rely', 'copies — all rely'],
  ['PDFs ' + MOJ + 'not', 'PDFs — not'],
  ['redaction ' + MOJ + 'data', 'redaction — data'],
  ['detection ' + MOJ + 'you', 'detection — you'],
  ['browser ' + MOJ + 'your', 'browser — your'],
  ['</strong> ' + MOJ + 'Your', '</strong> — Your'],
  ['</strong> ' + MOJ + 'Open', '</strong> — Open'],
  ['</strong> ' + MOJ + 'JPG', '</strong> — JPG'],
  ['</strong> ' + MOJ + 'Clear', '</strong> — Clear'],
  ['Settings ' + MOJ + 'Privacy', 'Settings → Privacy'],
  ['Privacy ' + MOJ + 'Location', 'Privacy → Location'],
  ['Services ' + MOJ + 'Camera', 'Services → Camera'],
  ['digits 7' + MOJ + '2', 'digits 7–12'],
  ['<h3 class="font-bold text-green-900 mb-3">' + MOJ + 'Advantages', '<h3 class="font-bold text-green-900 mb-3">✅ Advantages'],
  ['<h3 class="font-bold text-red-900 mb-3">' + MOJ + 'Risks', '<h3 class="font-bold text-red-900 mb-3">❌ Risks'],
  ['<h3 class="font-bold text-green-900 mb-2">' + MOJ + 'What', '<h3 class="font-bold text-green-900 mb-2">✅ What'],
  ['<span class="text-green-500 mr-2">' + MOJ + '/span>', '<span class="text-green-500 mr-2">✓</span>'],
  ['<span class="text-green-500 mr-3 text-2xl">' + MOJ + '/span>', '<span class="text-green-500 mr-3 text-2xl">✓</span>'],
  ['text-red-600">' + MOJ + 'Yes', 'text-red-600">✓ Yes'],
  ['text-green-600">' + MOJ + 'No', 'text-green-600">✓ No'],
  ['text-green-600">' + MOJ + 'N/A', 'text-green-600">✓ N/A'],
  ['text-green-600">' + MOJ + 'Yes', 'text-green-600">✓ Yes'],
  ['text-green-600">' + MOJ + 'None', 'text-green-600">✓ None'],
  ['text-green-600">' + MOJ + 'Free', 'text-green-600">✓ Free'],
  ['<li>' + MOJ + 'Access', '<li>• Access'],
  ['<li>' + MOJ + 'Automatic', '<li>• Automatic'],
  ['<li>' + MOJ + 'Collaboration', '<li>• Collaboration'],
  ['<li>' + MOJ + 'No software', '<li>• No software'],
  ['<li>' + MOJ + 'Files uploaded', '<li>• Files uploaded'],
  ['<li>' + MOJ + 'Potential', '<li>• Potential'],
  ['<li>' + MOJ + 'Privacy policy', '<li>• Privacy policy'],
  ['<li>' + MOJ + 'Service shutdowns', '<li>• Service shutdowns'],
  ['<li>' + MOJ + 'Non-sensitive', '<li>• Non-sensitive'],
  ['<li>' + MOJ + 'Team collaboration', '<li>• Team collaboration'],
  ['<li>' + MOJ + 'Simple filters', '<li>• Simple filters'],
  ['<li>' + MOJ + 'Stock photos', '<li>• Stock photos'],
  ['<li>' + MOJ + 'Documents with', '<li>• Documents with'],
  ['<li>' + MOJ + 'ID cards', '<li>• ID cards'],
  ['<li>' + MOJ + 'Financial', '<li>• Financial'],
  ['<li>' + MOJ + 'Medical', '<li>• Medical'],
  ['<li>' + MOJ + 'Legal documents', '<li>• Legal documents'],
  ['<li>' + MOJ + 'Any sensitive', '<li>• Any sensitive'],
  ['<li>' + MOJ + '1 in 3', '<li>• 1 in 3'],
  ['<li>' + MOJ + '78%', '<li>• 78%'],
  ['<li>' + MOJ + 'Identity theft', '<li>• Identity theft'],
  ['<li>' + MOJ + 'Sharing error', '<li>• Sharing error'],
  ['<li>' + MOJ + 'Posting chat', '<li>• Posting chat'],
  ['<li>' + MOJ + 'Sharing banking', '<li>• Sharing banking'],
  ['<li>' + MOJ + 'Posting work', '<li>• Posting work'],
  ['<li>' + MOJ + 'Email addresses', '<li>• Email addresses'],
  ['<li>' + MOJ + 'Usernames', '<li>• Usernames'],
  ['<li>' + MOJ + 'Account numbers', '<li>• Account numbers'],
  ['<li>' + MOJ + 'Phone numbers', '<li>• Phone numbers'],
  ['<li>' + MOJ + 'Physical addresses', '<li>• Physical addresses'],
  ['<li>' + MOJ + 'Bank account', '<li>• Bank account'],
  ['<li>' + MOJ + 'Credit card details', '<li>• Credit card details'],
  ['<li>' + MOJ + 'Transaction', '<li>• Transaction'],
  ['<li>' + MOJ + 'Balances', '<li>• Balances'],
  ['<li>' + MOJ + 'Payment confirmations', '<li>• Payment confirmations'],
  ['<li>' + MOJ + 'Full account', '<li>• Full account'],
  ['<li>' + MOJ + 'Online banking', '<li>• Online banking'],
  ['<li>' + MOJ + 'Unrelated', '<li>• Unrelated'],
  ['<li>' + MOJ + 'Social Security', '<li>• Social Security'],
  ['<li>' + MOJ + 'Debit/Credit', '<li>• Debit/Credit'],
  ['<li>' + MOJ + 'Full 16-digit', '<li>• Full 16-digit'],
  ['<li>' + MOJ + 'CVV/CVC', '<li>• CVV/CVC'],
  ['<li>' + MOJ + 'Expiry date', '<li>• Expiry date'],
  ['<li>' + MOJ + 'Cardholder', '<li>• Cardholder'],
  ['<li>' + MOJ + 'Billing address', '<li>• Billing address'],
  ['<li>' + MOJ + 'Always obtain', '<li>• Always obtain'],
  ['<li>' + MOJ + 'Use multiple', '<li>• Use multiple'],
  ['<li>' + MOJ + 'Remove ALL', '<li>• Remove ALL'],
  ['<li>' + MOJ + 'Test images', '<li>• Test images'],
  ['<li>' + MOJ + 'Consider context', '<li>• Consider context'],
  ['<li>' + MOJ + 'Blur entire', '<li>• Blur entire'],
  ['<li>' + MOJ + 'Cover distinctive', '<li>• Cover distinctive'],
  ['<li>' + MOJ + 'Obscure eye', '<li>• Obscure eye'],
  ['<li>' + MOJ + 'Use heavy', '<li>• Use heavy'],
  ['<li>' + MOJ + 'Cover unique', '<li>• Cover unique'],
  ['<li>' + MOJ + 'Blur visible', '<li>• Blur visible'],
  ['<li>' + MOJ + 'Hide birthmarks', '<li>• Hide birthmarks'],
  ['<li>' + MOJ + 'Obscure distinctive', '<li>• Obscure distinctive'],
  ['<li>' + MOJ + 'Blur recognizable', '<li>• Blur recognizable'],
  ['<li>' + MOJ + 'Remove street', '<li>• Remove street'],
  ['<li>' + MOJ + 'Obscure license', '<li>• Obscure license'],
  ['<li>' + MOJ + 'Hide building', '<li>• Hide building'],
  ['<li>' + MOJ + 'Strip EXIF', '<li>• Strip EXIF'],
  ['<li>' + MOJ + 'Remove creation', '<li>• Remove creation'],
  ['<li>' + MOJ + 'Delete device', '<li>• Delete device'],
  ['<li>' + MOJ + 'Use tools that', '<li>• Use tools that'],
  ['<span>' + MOJ + '/span>', '<span>•</span>'],
];

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules') continue;
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, files);
    else if (name.endsWith('.html')) files.push(p);
  }
  return files;
}

let total = 0;
for (const file of walk(root)) {
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes(MOJ) && !html.includes('\uFFFD')) continue;
  const orig = html;
  for (const [from, to] of replacements) {
    html = html.split(from).join(to);
  }
  // fallback: remaining MOJ before word -> bullet in list contexts
  html = html.replace(new RegExp('<li>' + MOJ.replace('?', '\\?'), 'g'), '<li>• ');
  if (html !== orig) {
    fs.writeFileSync(file, html, 'utf8');
    total++;
    console.log('Fixed encoding:', path.relative(root, file));
  }
}
console.log('Encoding fixes:', total);
