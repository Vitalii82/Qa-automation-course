import { Page } from 'playwright';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export class MainPage {
    public readonly page: Page;
    public readonly header: Header;
    public readonly footer: Footer;

    public constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://www.demoblaze.com/');
    }

    public async verifyHeaderAndFooterVisible(): Promise<void> {
        await this.header.verifyHeaderVisible();
        await this.footer.verifyFooterVisible();
    }

    public async clickFirstProductCard(): Promise<void> {
        await this.page.locator('.card-title >> nth=0').click();
    }
}
