import { Page, expect } from '@playwright/test';

export class RozetkaPage {
    private page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public async navigate(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/');
    }

    public async searchForProduct(productName: string): Promise<void> {
        await this.page.fill('input[name="search"]', productName);
        await this.page.press('input[name="search"]', 'Enter');
    }

    public async openFirstProduct(): Promise<void> {
        await this.page.locator('.goods-tile__heading').first().click();
    }

    public async addToCart(): Promise<void> {
        await this.page.click('button.buy-button');
    }

    public async goToCart(): Promise<void> {
        await this.page.click('[href*="cart"]');
    }

    public async checkCartNotEmpty(): Promise<void> {
        await expect(this.page.locator('.cart-product')).toBeVisible();
    }
}
