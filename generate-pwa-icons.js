import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve(process.cwd(), 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate high quality SVG branding for "از اصفهان"
const svgLogo = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="112" fill="#0f766e"/>
  <circle cx="256" cy="256" r="210" fill="none" stroke="#2dd4bf" stroke-width="8" stroke-dasharray="16 12" opacity="0.6"/>
  <circle cx="256" cy="256" r="175" fill="#115e59"/>
  <!-- Decorative Persian Geometric Dome motif -->
  <path d="M 256 95 C 290 150, 350 200, 350 260 C 350 320, 305 365, 256 365 C 207 365, 162 320, 162 260 C 162 200, 222 150, 256 95 Z" fill="#0f766e" stroke="#5eead4" stroke-width="6"/>
  <circle cx="256" cy="256" r="45" fill="#fef3c7" />
  <text x="256" y="435" text-anchor="middle" fill="#ffffff" font-family="Tahoma, Vazirmatn, sans-serif" font-weight="900" font-size="44" letter-spacing="-1">از اصفهان</text>
</svg>
`;

// Maskable SVG (with padding margin for safe area)
const svgMaskable = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#0f766e"/>
  <circle cx="256" cy="256" r="160" fill="#115e59"/>
  <path d="M 256 120 C 285 170, 330 215, 330 265 C 330 315, 295 350, 256 350 C 217 350, 182 315, 182 265 C 182 215, 227 170, 256 120 Z" fill="#0f766e" stroke="#5eead4" stroke-width="6"/>
  <circle cx="256" cy="265" r="38" fill="#fef3c7" />
  <text x="256" y="420" text-anchor="middle" fill="#ffffff" font-family="Tahoma, Vazirmatn, sans-serif" font-weight="900" font-size="38">از اصفهان</text>
</svg>
`;

async function main() {
  console.log('Generating PWA icons...');
  
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgLogo);

  // 192x192 PNG
  await sharp(Buffer.from(svgLogo))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'pwa-192x192.png'));
  console.log('✓ Generated pwa-192x192.png');

  // 512x512 PNG
  await sharp(Buffer.from(svgLogo))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-512x512.png'));
  console.log('✓ Generated pwa-512x512.png');

  // 512x512 Maskable PNG
  await sharp(Buffer.from(svgMaskable))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'maskable-icon-512x512.png'));
  console.log('✓ Generated maskable-icon-512x512.png');

  // Apple touch icon 180x180
  await sharp(Buffer.from(svgLogo))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Generated apple-touch-icon.png');

  console.log('All PWA branding icons generated successfully!');
}

main();
