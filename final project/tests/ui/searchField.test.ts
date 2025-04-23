import { chromium } from 'playwright';
import { expect } from 'chai';

describe('FopHelp UI Search Field', () => {
  let browser, page;

  before(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://new.fophelp.pro');
  });

  after(async () => {
    await browser.close();
  });

  it('should display the search input field', async () => {
    const isVisible = await page.isVisible('input[type="text"]');
    expect(isVisible).to.be.true;
  });

  it('should show results when searching a real name', async () => {
    await page.fill('input[type="text"]', 'Петренко');
    await page.keyboard.press('Enter');
    await page.waitForSelector('.search-results');
    const results = await page.$$eval('.search-results .result-item', items => items.length);
    expect(results).to.be.greaterThan(0);
  });

  it('should show error when search is empty', async () => {
    await page.fill('input[type="text"]', '');
    await page.keyboard.press('Enter');
    const errorMsg = await page.textContent('.v-alert');
    expect(errorMsg).to.include('Введіть запит для пошуку');
  });
