const path = require('path');
const sharp = require('sharp');

async function main() {
  const root = path.join(__dirname, '..');
  const logoPath = path.join(root, 'logo.png');
  const meta = await sharp(logoPath).metadata();
  const w = meta.width;
  const h = meta.height;

  const crop = {
    left: Math.round(w * 0.08),
    top: Math.round(h * 0.03),
    width: Math.round(w * 0.84),
    height: Math.round(h * 0.67),
  };

  const shield = sharp(logoPath).extract(crop).png();
  const sizes = [
    [16, 'favicon-16x16.png'],
    [32, 'favicon-32x32.png'],
    [180, 'apple-touch-icon.png'],
    [192, 'android-chrome-192x192.png'],
    [512, 'android-chrome-512x512.png'],
  ];

  for (const [size, name] of sizes) {
    await shield
      .clone()
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(root, name));
  }

  await shield.clone().resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(root, 'favicon.png'));
  console.log('Generated favicons from', w, 'x', h);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
