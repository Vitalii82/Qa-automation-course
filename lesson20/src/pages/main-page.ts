import { Page, expect } from 'playwright';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export class MainPage {
    private header: Header;
    private footer: Footer;

    constructor(private page: Page) {
        this.header = new Header(page);
        this.footer = new Footer(page);
    }

    async verifyHeaderVisible(): Promise<void> {
        await this.header.verifyVisible();
    }

    async verifyFooterVisible(): Promise<void> {
        await this.footer.verifyVisible();
    }

    async verifyProductCardsVisible(): Promise<void> {
        await expect(this.page.locator('.card-block')).toBeVisible();
    }
}
