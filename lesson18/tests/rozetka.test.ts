import { test, expect, Page } from '@playwright/test';
import { RozetkaPage } from '../src/pages/Rozetka-Page';

test.describe('Rozetka Tests', () => {
    let page: Page;
    let rozetka: RozetkaPage;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        rozetka = new RozetkaPage(page);
        await rozetka.navigate();
    });

    test('Search for a product', async () => {
        await rozetka.searchForProduct('iPhone 15');
        const productCount = await page.locator('.goods-tile').count();
        expect(productCount).toBeGreaterThan(0);
    });

    test('Open first product from search results', async () => {
        await rozetka.searchForProduct('MacBook Air');
        await rozetka.openFirstProduct();
        await expect(page).toHaveURL(/.*product.*/);
    });

    test('Add product to cart', async () => {
        await rozetka.searchForProduct('PlayStation 5');
        await rozetka.openFirstProduct();
        await rozetka.addToCart();
        await rozetka.goToCart();
        await rozetka.checkCartNotEmpty();
    });

    test('Check main page loads', async () => {
        await expect(page.locator('header')).toBeVisible();
    });

    test('Navigate to catalog', async () => {
        await page.locator('button.menu-toggler').click();
        await expect(page.locator('.menu-categories')).toBeVisible();
    });

    test('Check login popup', async () => {
        await page.locator('button.header__button[data-popup-handler]').click();
        await expect(page.locator('.auth-modal')).toBeVisible();
    });

    test('Check footer visibility', async () => {
        await expect(page.locator('footer')).toBeVisible();
    });

    test('Verify language switcher', async () => {
        await page.locator('button[lang-switcher]').click();
        await expect(page.locator('.lang-switcher-popup')).toBeVisible();
    });

    test('Test filtering by brand', async () => {
        await rozetka.searchForProduct('laptop');
        await page.locator('label[for="filter-brand-apple"]').click();
        const filteredProductCount = await page.locator('.goods-tile').count();
        expect(filteredProductCount).toBeGreaterThan(0);
    });

    test('Check promotions section', async () => {
        await expect(page.locator('.promo-section')).toBeVisible();
    });

    test('Validate contact page', async () => {
        await page.locator('a[href="/contacts/"]').click();
        await expect(page).toHaveURL(/.*contacts.*/);
    });

    test('Check wishlist button', async () => {
        await rozetka.searchForProduct('Samsung Galaxy');
        await page.locator('button.wishlist-button').first;
        await expect(page.locator('.comparison-notification')).toBeVisible();
    });

    test('Validate help center', async () => {
        await page.locator('a[href="/help/"]').click();
        await expect(page).toHaveURL(/.*help.*/);
    });

    test.afterEach(async () => {
        await page.close();
    });
});
