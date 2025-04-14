import { Page } from 'playwright';
import { expect } from '@playwright/test';

export class Footer {
    private page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public async verifyFooterVisible():Promise<void> {
        await expect(this.page.locator('footer')).toBeVisible({ timeout: 5000 });
    }

    public async verifyCopyrightVisible():Promise<void> {
        await expect(this.page.locator('footer')).toContainText('©');
    }

    public async verifySocialMediaIconsVisible():Promise<void> {
        await expect(this.page.locator('footer i')).toHaveCount(4);
    }
}
