import { Page, expect } from 'playwright';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export class CartPage {
    private header: Header;
    private footer: Footer;

    public constructor(private page: Page) {
        this.header = new Header(page);
        this.footer = new Footer(page);
    }

    async navigate(): Promise<void> {
        await this.page.click('#cartur');
        await expect(this.page).toHaveURL(/.*cart/);
    }

    async verifyHeaderVisible(): Promise<void> {
        await this.header.verifyVisible();
    }

    async verifyFooterVisible(): Promise<void> {
        await this.footer.verifyVisible();
    }

    async verifyProductInCart(productName: string): Promise<void> {
        const productLocator = this.page.locator('tr.success td').first();
        await expect(productLocator).toContainText(productName);
    }
}
