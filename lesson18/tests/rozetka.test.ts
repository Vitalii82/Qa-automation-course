import { test, expect } from '@playwright/test';
import { RozetkaPage } from '../src/pages/RozetkaPage';
import { Page } from 'playwright';
let page: Page;

test.describe('Rozetka Tests', () => {
    let page;
    let rozetka;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        rozetka = new RozetkaPage(page);
        await rozetka.navigate();
    });

    test('Search for a product', async () => {
        await rozetka.searchForProduct('iPhone 15');
        expect(await rozetka.productCount.textContent()).toBeGreaterThan(0);
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
        expect(await rozetka.cartItemsCount.textContent()).toBeGreaterThan(0);
    });

    test('Check main page loads', async () => {
        await expect(rozetka.header).toBeVisible();
    });

    test('Navigate to catalog', async () => {
        await rozetka.openCatalog();
        await expect(rozetka.menuCategories).toBeVisible();
    });

    test('Check login popup', async () => {
        await rozetka.openLoginPopup();
        await expect(rozetka.authModal).toBeVisible();
    });

    test('Check footer visibility', async () => {
        await expect(rozetka.footer).toBeVisible();
    });

    test('Verify language switcher', async () => {
        await rozetka.switchLanguage();
        await expect(rozetka.languageSwitcherPopup).toBeVisible();
    });

    test('Test filtering by brand', async () => {
        await rozetka.searchForProduct('laptop');
        await rozetka.filterByBrand('apple');
        expect(await rozetka.productCount.textContent()).toBeGreaterThan(0);
    });

    test('Check promotions section', async () => {
        await expect(rozetka.promoSection).toBeVisible();
    });

    test('Validate contact page', async () => {
        await rozetka.openContactsPage();
        await expect(page).toHaveURL(/.*contacts.*/);
    });

    test('Check wishlist button', async () => {
        await rozetka.searchForProduct('Samsung Galaxy');
        await rozetka.addToWishlist();
        await expect(rozetka.wishlistNotification).toBeVisible();
    });

    test('Validate checkout page', async () => {
        await rozetka.searchForProduct('Headphones');
        await rozetka.openFirstProduct();
        await rozetka.addToCart();
        await rozetka.goToCheckout();
        await expect(page).toHaveURL(/.*checkout.*/);
    });

    test('Verify store locations', async () => {
        await rozetka.openStoresPage();
        await expect(page).toHaveURL(/.*stores.*/);
    });

    test('Check blog section', async () => {
        await rozetka.openBlogPage();
        await expect(page).toHaveURL(/.*blog.*/);
    });

    test('Validate order tracking page', async () => {
        await rozetka.openTrackingPage();
        await expect(page).toHaveURL(/.*tracking.*/);
    });

    test('Check comparison feature', async () => {
        await rozetka.searchForProduct('Monitor');
        await rozetka.addToComparison();
        await expect(rozetka.comparisonNotification).toBeVisible();
    });

    test('Validate help center', async () => {
        await rozetka.openHelpCenter();
        await expect(page).toHaveURL(/.*help.*/);
    });

    test.afterEach(async () => {
        await page.close();
    });
});
