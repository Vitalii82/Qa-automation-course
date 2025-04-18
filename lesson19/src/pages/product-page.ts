import { Page, expect } from '@playwright/test';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export class ProductPage {
    public header: Header;
    public footer: Footer;

    public constructor(private page: Page) {
        this.header = new Header(page);
        this.footer = new Footer(page);
    }

    public async getProductTitle(): Promise<string | null> {
        return this.page.locator('.name').textContent();
    }

    public async addToCart(): Promise<void> {
        await this.page.locator('a.btn.btn-success.btn-lg').click();
    }

    public async verifyHeaderAndFooterVisible(): Promise<void> {
        await this.header.verifyHeaderVisible();
        expect(await this.footer.verifyVisible()).toBeTruthy();
    }
}
