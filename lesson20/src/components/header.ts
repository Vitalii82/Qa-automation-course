import { Page, expect } from 'playwright';

export class Header {
    public constructor(private page: Page) {}

    async verifyVisible(): Promise<void> {
        await expect(this.page.locator('header')).toBeVisible();
    }
}
