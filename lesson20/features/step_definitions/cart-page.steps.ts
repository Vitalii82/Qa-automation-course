import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { MainPage } from '../../src/pages/main-page';
import { ProductPage } from '../../src/pages/product-page';
import { CartPage } from '../../src/pages/cart-page';
import { CustomWorld } from  '../../src/support/world';

let mainPage: MainPage;
let productPage: ProductPage;
let cartPage: CartPage;

Before(async function (this: CustomWorld) {
    await this.init();
    mainPage = new MainPage(this.page);
    productPage = new ProductPage(this.page);
    cartPage = new CartPage(this.page);
});

After(async function (this: CustomWorld) {
    await this.close();
});

Given('I open the main page', async function () {
    await mainPage.goto();
});

When('I click on the first product card', async function () {
    await mainPage.clickFirstProductCard();
});

When('I add the product to the cart', async function () {
    await productPage.addToCart();
});

Then('I go to the cart page', async function () {
    await cartPage.goto();
});

Then('I should see the product in the cart', async function () {
    await cartPage.verifyProductVisible();
});
