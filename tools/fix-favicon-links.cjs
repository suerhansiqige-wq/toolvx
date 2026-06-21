const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const brokenPages = '    <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">`n    <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">`n    <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">';
const fixedPages = `    <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">`;

const brokenRoot = '    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">`n    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">`n    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">';
const fixedRoot = `    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`;

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules') continue;
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, files);
    else if (name.endsWith('.html')) files.push(p);
  }
  return files;
}

let count = 0;
for (const file of walk(root)) {
  let html = fs.readFileSync(file, 'utf8');
  const orig = html;
  html = html.replace(brokenPages, fixedPages).replace(brokenRoot, fixedRoot);
  html = html.replace(/\?/g, (m, off, s) => {
    // only fix common mojibake patterns if present
    return m;
  });
  if (html !== orig) {
    fs.writeFileSync(file, html, 'utf8');
    count++;
    console.log('Fixed', path.relative(root, file));
  }
}
console.log('Done', count);
