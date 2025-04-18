import { Page, expect } from '@playwright/test';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export class CartPage {
    public header: Header;
    public footer: Footer;

    public constructor(private page: Page) {
        this.header = new Header(page);
        this.footer = new Footer(page);
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://www.demoblaze.com/cart.html');
    }

    public async isProductInCart(productName: string): Promise<boolean> {
        const productRow = this.page.locator(`tr:has-text("${productName}")`);
        return await productRow.isVisible();
    }

    public async verifyHeaderAndFooterVisible(): Promise<void> {
        await this.header.verifyHeaderVisible();
        expect(await this.footer.verifyVisible()).toBeTruthy();
    }
}
