/* eslint-disable unicorn/filename-case */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Page, expect } from '@playwright/test';

export class RozetkaPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://rozetka.com.ua/');
    }

    async searchForProduct(product: string) {
        await this.page.fill('input[placeholder="Я шукаю ..."]', product);
        await this.page.keyboard.press('Enter');
    }

    async openFirstProduct() {
        await this.page.locator('.goods-tile__heading').first().click();
    }

    async addToCart() {
        await this.page.locator('button.buy-button').click();
    }

    async goToCart() {
        await this.page.locator('rz-cart button.header__button').click();
    }

    async checkCartNotEmpty() {
        await expect(this.page.locator('.cart-product')).toBeVisible();
    }
}
