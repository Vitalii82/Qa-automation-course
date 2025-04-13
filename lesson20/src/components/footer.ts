import { Page, expect } from 'playwright';

export class Footer {
    public constructor(private page: Page) {}

    async verifyVisible(): Promise<void> {
        await expect(this.page.locator('footer')).toBeVisible();
    }
}
