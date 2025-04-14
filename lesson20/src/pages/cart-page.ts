import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export class CartPage {
    private page: Page;
    public header: Header;
    public footer: Footer;

    public constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);
    }

    public async navigateToCartPage(): Promise<void> {
        await this.page.click('#cartur');
        await this.page.waitForSelector('.table-responsive', { timeout: 5000 });
    }

    public async verifyProductInCart(productName: string): Promise<void> {
        const product = this.page.locator('.success td', { hasText: productName });
        await expect(product).toBeVisible();
    }
}
