const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 60000 });
  await page.screenshot({ path: "public/preview-home.png", fullPage: false });
  await page.screenshot({ path: "public/preview-full.png", fullPage: true });
  console.log("Screenshots saved to public/preview-home.png and public/preview-full.png");
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
