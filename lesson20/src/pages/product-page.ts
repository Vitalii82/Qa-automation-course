import { Page } from 'playwright';
import { expect } from '@playwright/test';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export class ProductPage {
    private page: Page;
    public header: Header;
    public footer: Footer;

    public constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);
    }

    public async addToCart(): Promise<void> {
        await this.page.click('a:has-text("Add to cart")');
        await this.page.waitForEvent('dialog').then(dialog => dialog.accept());
    }

    public async verifyProductDetailsVisible(): Promise<void> {
        await expect(this.page.locator('.name')).toBeVisible();
    }
}
