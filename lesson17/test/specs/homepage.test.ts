import HomePage from '../pageObjects/HomePage';
import { browser } from '@wdio/globals';

describe('Rozetka Shopping Flow with WebdriverIO', () => {
    it('Searches for a product', async () => {
        await browser.url('https://rozetka.com.ua/');
        await HomePage.searchForProduct('Ноутбук');
        await browser.pause(10000);
    });
});
