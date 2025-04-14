import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import { chromium, Browser } from 'playwright'; // Імпортуємо chromium для створення браузера

let browser: Browser; // Перемінна для браузера

Before(async function (this: CustomWorld) {
    // Ініціалізація браузера та контексту
    browser = await chromium.launch(); // Запускаємо браузер
    this.context = await browser.newContext(); // Створюємо новий контекст
    this.page = await this.context.newPage(); // Створюємо нову сторінку
});

After(async function (this: CustomWorld) {
    // Очищення після тесту
    await this.page.close(); // Закриваємо сторінку
    await this.context.close(); // Закриваємо контекст
    await browser.close(); // Закриваємо браузер
});
