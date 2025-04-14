import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { MainPage } from '../../src/pages/main-page';
import { ProductPage } from '../../src/pages/product-page';
import { CustomWorld } from '../../src/support/world';

let mainPage: MainPage;
let productPage: ProductPage;

Before(async function (this: CustomWorld) {
    await this.init();
    mainPage = new MainPage(this.page);
    productPage = new ProductPage(this.page);
});

After(async function (this: CustomWorld) {
    await this.close();
});

Given('I open the main page', async function (this: CustomWorld) {
    await mainPage.goto();
});

When('I click on the first product card', async function () {
    await mainPage.clickFirstProductCard();
});

Then('I should be navigated to the product page', async function () {
    await productPage.verifyProductTitleVisible();
});
