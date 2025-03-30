import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: 'tests', // Папка з тестами
    timeout: 30000, // Максимальний час виконання тесту
    expect: {
        timeout: 5000 // Час очікування для assertions
    },
    fullyParallel: true, // Запускати тести паралельно
    workers: process.env.CI ? 2 : 4, // Кількість працівників для запуску тестів (змінити залежно від середовища)
    reporter: 'list', // Формат звітності
    use: {
        baseURL: 'https://rozetka.com.ua/', // Базова URL для тестів
        actionTimeout: 0, // Вимикає тайм-аут для дій (клік, перехід і т.д.)
        navigationTimeout: 0, // Вимикає тайм-аут для навігації
        screenshot: 'only-on-failure', // Скриншоти тільки при помилках
        video: 'retain-on-failure', // Запис відео при невдачі
        trace: 'retain-on-failure' // Запис трасування при помилці
    },
    projects: [
        {
            name: 'Desktop Chrome', // Проєкт для тестів у десктопному браузері
            use: { ...devices['Desktop Chrome'] }
        },
        {
            name: 'Mobile Safari', // Проєкт для тестів у мобільному браузері
            use: { ...devices['iPhone 12'] }
        }
    ],
    testMatch: ['**/*.test.ts'] // Переконатися, що всі файли з розширенням .test.ts будуть виконуватися
});
