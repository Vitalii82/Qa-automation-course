// Виконується перед кожним тестом
import './commands';

// Додає хендлери для невідомих помилок
Cypress.on('uncaught:exception', (err) => {
    console.error('Uncaught exception:', err);
    return false; // Cypress не фейлить тести через помилки в консолі
});
