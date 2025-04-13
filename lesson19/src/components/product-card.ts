import { Page, Locator } from '@playwright/test';

export class ProductCard {
    private readonly card: Locator;

    public constructor(private page: Page, private index = 0) {
        this.card = page.locator('.card').nth(index);
    }

    public async getTitle(): Promise<string | null> {
        return this.card.locator('.card-title').textContent();
    }

    public async click(): Promise<void> {
        await this.card.click();
    }
}
