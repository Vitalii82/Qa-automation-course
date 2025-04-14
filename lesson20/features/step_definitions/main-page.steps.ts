import { Given, Then, Before, After } from '@cucumber/cucumber';
import { MainPage } from '../../src/pages/main-page';
import { CustomWorld } from '../../src/support/world';

let mainPage: MainPage;

Before(async function (this: CustomWorld) {
    await this.init();
    mainPage = new MainPage(this.page);
});

After(async function (this: CustomWorld) {
    await this.close();
});

Given('I open the main page', async function (this: CustomWorld) {
    await mainPage.goto();
});

Then('I should see the header and footer', async function () {
    await mainPage.verifyHeaderAndFooterVisible();
});
