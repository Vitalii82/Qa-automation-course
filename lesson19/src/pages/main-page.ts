import { Page, expect } from '@playwright/test';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ProductCard } from '../components/product-card';

export class MainPage {
    public page: Page;
    public header: Header;
    public footer: Footer;

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
        expect(await this.footer.verifyVisible()).toBeTruthy();
    }

    public async getProductCardsCount(): Promise<number> {
        return await this.page.locator('.card').count();
    }

    public async clickOnProductByName(productName: string): Promise<void> {
        const cards = this.page.locator('.card');
        const count = await cards.count();

        for (let i = 0; i < count; i++) {
            const title = await cards.nth(i).locator('.card-title').textContent();
            if (title?.trim() === productName) {
                await cards.nth(i).click();
                return;
            }
        }

        throw new Error(`Product with name "${productName}" not found.`);
    }
}
