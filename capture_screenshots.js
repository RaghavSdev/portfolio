const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function capture() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // Wait 3s for preloader and animations
  await new Promise(r => setTimeout(r, 3500));

  const outDir = path.join(__dirname, 'public', 'screenshots');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // 1. Hero Section
  console.log('Capturing 01_hero.png...');
  await page.screenshot({ path: path.join(outDir, '01_hero.png') });

  // 2. About Section
  console.log('Capturing 02_about.png...');
  await page.evaluate(() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, '02_about.png') });

  // 3. Projects Section
  console.log('Capturing 03_projects.png...');
  await page.evaluate(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, '03_projects.png') });

  // 4. Experience Section
  console.log('Capturing 04_experience.png...');
  await page.evaluate(() => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, '04_experience.png') });

  // 5. Connect Section (with matrix grid & vinyl player)
  console.log('Capturing 05_connect.png...');
  await page.evaluate(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, '05_connect.png') });

  // 6. Full Page Screenshot
  console.log('Capturing 06_full_page.png...');
  await page.screenshot({ path: path.join(outDir, '06_full_page.png'), fullPage: true });

  await browser.close();
  console.log('All actual live section screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Screenshot capture error:', err);
  process.exit(1);
});
