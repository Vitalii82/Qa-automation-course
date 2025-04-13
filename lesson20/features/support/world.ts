import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
export let page: Page;

before(async () => {
    browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
});

after(async () => {
    await browser.close();
});
