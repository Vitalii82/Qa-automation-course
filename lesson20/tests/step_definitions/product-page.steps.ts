import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../../src/support/world';
import { ProductPage } from '../../src/pages/product-page';

const productPage = new ProductPage(page);

Given('I open the main page', async () => {
    await page.goto('https://www.demoblaze.com/');
});

When('I click on the first product card', async () => {
    await productPage.clickFirstProductCard();
});

Then('I should be navigated to the product page', async () => {
    await productPage.verifyOnProductPage();
});
