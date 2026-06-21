const fs = require('fs');
const path = require('path');

const brandBlock = `                    <img src="../logo.png" alt="" class="h-8 w-auto" aria-hidden="true" />
                    <span class="site-header-brand">
                        <span class="site-header-brand-name">toolvx</span>
                        <span class="site-header-brand-tag">Local Image &amp; PDF Redaction</span>
                    </span>`;

const old = '<img src="../logo.png" alt="toolvx" class="h-8 w-auto" />';

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules') continue;
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

let count = 0;
for (const file of walk('.')) {
  if (file === 'index.html') continue;
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes(old)) continue;
  html = html.replace(old, brandBlock);
  fs.writeFileSync(file, html);
  count++;
  console.log(file);
}
console.log('updated', count);
