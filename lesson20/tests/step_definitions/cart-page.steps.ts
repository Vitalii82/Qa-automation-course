import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../src/support/world';
import { CartPage } from '../../src/pages/cart-page';

const cartPage = new CartPage(page);

Given('I open the main page', async () => {
    await page.goto('https://www.demoblaze.com/');
});

When('I click on the first product card', async () => {
    await cartPage.clickFirstProductCard();
});

When('I add the product to the cart', async () => {
    await cartPage.addToCart();
});

Then('I go to the cart page', async () => {
    await cartPage.goToCart();
});

Then('I should see the product in the cart', async () => {
    await cartPage.verifyProductInCart();
});
