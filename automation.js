const { chromium } = require('playwright');

const formData = [
  { selector: '#name', value: 'Dana Leibu' },
  { selector: '#email', value: 'dana.leibu@gmail.com' },
  { selector: '#phone', value: '+972500000000' },
  { selector: '#company', value: 'Jones' },
  { selector: '#website', value: 'https://jones.com' },
];

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://test.netlify.app/');

  for (const field of formData) {
    await page.fill(field.selector, field.value);
  }

  await page.waitForTimeout(5000);
  await browser.close();
})();
