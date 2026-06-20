const { chromium } = require('playwright');

const SITE_URL = 'https://test.netlify.app/';

const formData = {
  name: 'Dana Leibu',
  email: 'dana.test@example.com',
  phone: '+972500000000',
  company: 'Jones',
  website: 'https://example.com',
  employees: '51-500',
};

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 800 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(SITE_URL);

  await page.getByLabel('Name').fill(formData.name);
  await page.getByLabel('Email').fill(formData.email);
  await page.getByLabel('Phone').fill(formData.phone);
  await page.getByLabel('Company').fill(formData.company);
  await page.getByLabel('Website').fill(formData.website);

  await page.getByLabel('Number of Employees').selectOption({ label: formData.employees });

  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  await page.getByRole('button', { name: 'Request a call back' }).click();

  await page.waitForLoadState('networkidle');

  if (page.url().includes('thank-you')) {
    console.log('Reached the thank you page');
  }

  await page.waitForTimeout(3000);
  await browser.close();
})();
