const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Wait for the app to start
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  const widths = [360, 375, 390, 412, 430];
  const outDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  for (const width of widths) {
    await page.setViewportSize({ width, height: 800 });
    // wait a bit for any re-layout or animations
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outDir, `hero_${width}.png`), clip: { x: 0, y: 0, width, height: 800 } });
    console.log(`Screenshot saved for width ${width}`);
  }

  await browser.close();
})();
