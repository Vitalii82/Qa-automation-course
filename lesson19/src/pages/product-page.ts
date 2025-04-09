import { Page, Locator } from '@playwright/test';

export class ProductPage {
    private page: Page;
    private addToCartButton: Locator;
    private productTitle: Locator;
    private productPrice: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('#add-to-cart');
        this.productTitle = page.locator('.product-title');
        this.productPrice = page.locator('.product-price');
    }

    public async goto(productId: string): Promise<void> {
        await this.page.goto(`https://www.demoblaze.com/product?id=${productId}`);
    }

    public async addToCart(): Promise<void> {
        await this.addToCartButton.click();
    }

    public async getProductTitle(): Promise<string> {
        return this.productTitle.textContent();
    }

    public async getProductPrice(): Promise<string> {
        return this.productPrice.textContent();
    }
}
