import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../src/support/world';
import { Header } from '../../src/components/header';
import { Footer } from '../../src/components/footer';

const header = new Header(page);
const footer = new Footer(page);

Given('I open the main page', async () => {
    await page.goto('https://www.demoblaze.com/');
});

Then('I should see the header and footer', async () => {
    await header.verifyVisible();
    await footer.verifyVisible();
});
