import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../features/support/world';
import { MainPage } from '../../src/pages/main-page';
import { ProductPage } from '../../src/pages/product-page';
import { CartPage } from '../../src/pages/cart-page';

const mainPage = new MainPage(page);
const productPage = new ProductPage(page);
const cartPage = new CartPage(page);

Given('I open the main page', async () => {
    await mainPage.goto();
});

Then('I should see the header', async () => {
    await mainPage.header.verifyHeaderVisible();
});

Then('I should see the footer', async () => {
    await mainPage.footer.verifyFooterVisible();
});

Then('I should see product cards', async () => {
    await mainPage.verifyProductCardsVisible();
});

When('I click on the first product card', async () => {
    await mainPage.clickFirstProductCard();
});

Then('I should be on the product page', async () => {
    await expect(page).toHaveURL(/prod\.html\?idp_/);
});

When('I add the product to the cart', async () => {
    await productPage.addToCart();
});

Then('I should see a confirmation alert', async () => {
    page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    });
});

Given('I open the cart page', async () => {
    await cartPage.goto();
});

Then('I should see a product in the cart', async () => {
    await cartPage.verifyProductInCart();
});
