const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function recordFrames() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const framesDir = path.join(__dirname, 'frames');
  if (!fs.existsSync(framesDir)) fs.mkdirSync(framesDir, { recursive: true });

  console.log('Navigating to http://localhost:3000 for frame capture...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // 1. Record Hero Typewriter Animation (30 frames over 3 seconds)
  console.log('Recording Hero Animation...');
  const heroDir = path.join(framesDir, 'hero');
  if (!fs.existsSync(heroDir)) fs.mkdirSync(heroDir, { recursive: true });

  for (let i = 0; i < 30; i++) {
    await page.screenshot({ path: path.join(heroDir, `frame_${String(i).padStart(2, '0')}.png`) });
    await new Promise(r => setTimeout(r, 100));
  }

  // 2. Record 3D Tilt Hover Animation (Simulate cursor sweeping across a card)
  console.log('Recording 3D Tilt Hover Animation...');
  await page.evaluate(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 500));

  const tiltDir = path.join(framesDir, 'tilt');
  if (!fs.existsSync(tiltDir)) fs.mkdirSync(tiltDir, { recursive: true });

  const cardBounds = await page.evaluate(() => {
    const card = document.querySelector('.tilt-card');
    if (!card) return null;
    const r = card.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2, left: r.left, top: r.top, w: r.width, h: r.height };
  });

  if (cardBounds) {
    for (let i = 0; i < 25; i++) {
      const angle = (i / 25) * Math.PI * 2;
      const mouseX = cardBounds.left + cardBounds.w / 2 + Math.cos(angle) * (cardBounds.w * 0.35);
      const mouseY = cardBounds.top + cardBounds.h / 2 + Math.sin(angle) * (cardBounds.h * 0.35);
      await page.mouse.move(mouseX, mouseY);
      await page.screenshot({ path: path.join(tiltDir, `frame_${String(i).padStart(2, '0')}.png`) });
      await new Promise(r => setTimeout(r, 80));
    }
  }

  // 3. Record Connect Section Light-Up Matrix & Vinyl Player Animation
  console.log('Recording Connect Matrix & Vinyl Animation...');
  await page.evaluate(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 500));

  const matrixDir = path.join(framesDir, 'matrix');
  if (!fs.existsSync(matrixDir)) fs.mkdirSync(matrixDir, { recursive: true });

  // Click vinyl player to trigger spinning disc & needle
  await page.evaluate(() => {
    const vinylCard = document.querySelector('.fixed.bottom-24.right-10');
    if (vinylCard) (vinylCard).click();
  });
  await new Promise(r => setTimeout(r, 300));

  for (let i = 0; i < 30; i++) {
    // Sweep mouse across matrix canvas
    const x = 300 + (i / 30) * 600;
    const y = 300 + Math.sin((i / 30) * Math.PI * 4) * 150;
    await page.mouse.move(x, y);
    await page.screenshot({ path: path.join(matrixDir, `frame_${String(i).padStart(2, '0')}.png`) });
    await new Promise(r => setTimeout(r, 90));
  }

  await browser.close();
  console.log('All frame sequences recorded successfully!');
}

recordFrames().catch(err => {
  console.error('Frame recording error:', err);
  process.exit(1);
});
