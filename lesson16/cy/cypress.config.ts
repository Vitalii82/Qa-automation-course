
import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'https://rozetka.com.ua',
        supportFile: 'cypress/support/e2e.ts',
        defaultCommandTimeout: 10000
    }
});
