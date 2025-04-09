import { Page, Locator } from '@playwright/test';

export class CartPage {
    private page: Page;
    private cartItems: Locator;
    private orderConfirmationMessage: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('#cart tbody tr');
        this.orderConfirmationMessage = page.locator('#order-confirmation');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://www.demoblaze.com/cart.html');
    }

    public async removeProduct(productName: string): Promise<void> {
        const productRow = this.page.locator(`//td[contains(text(), "${productName}")]/..//a[contains(text(), "Delete")]`);
        await productRow.click();
    }

    public async placeOrder(): Promise<void> {
        await this.page.locator('button:has-text(\'Place Order\')').click();
    }
}
