import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { CustomWorld } from './world';

setDefaultTimeout(60 * 1000); // 60 секунд на крок

let browser: Browser;

Before(async function (this: CustomWorld) {
    browser = await chromium.launch({ headless: false }); // headless: false для зручності дебагу
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    this.context = context;
    this.page = page;
});

After(async function (this: CustomWorld) {
    await this.page?.close();
    await this.context?.close();
    await browser?.close();
});
