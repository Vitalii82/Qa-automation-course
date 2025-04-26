import { chromium } from 'playwright';
import { expect } from 'chai';

describe('FopHelp UI', () => {
  it('should display main title on homepage', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://new.fophelp.pro');
    const title = await page.textContent('h1');
    expect(title).to.include('Пошук ФОП');
    await browser.close();
  });
});
