import { Page, expect } from 'playwright';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export class ProductPage {
    private header: Header;
    private footer: Footer;

    public constructor(private page: Page) {
        this.header = new Header(page);
        this.footer = new Footer(page);
    }

    async verifyHeaderVisible(): Promise<void> {
        await this.header.verifyVisible();
    }

    async verifyFooterVisible(): Promise<void> {
        await this.footer.verifyVisible();
    }

    async addToCart(): Promise<void> {
        await this.page.click('a:has-text("Add to cart")');
        await this.page.waitForEvent('dialog').then(dialog => dialog.accept());
    }

    async getProductTitle(): Promise<string> {
        return await this.page.locator('.name').innerText();
    }
}
