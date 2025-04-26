# FopHelp Automated Tests

## Технології:
- TypeScript
- Playwright (UI)
- Axios (API)
- Mocha + Mochawesome
- Docker + GitHub Actions

## Запуск:
### Вручну:
\`\`\`bash
npm install
npm run test:report
\`\`\`

### В Docker:
\`\`\`bash
docker-compose up --build
\`\`\`

### CI:
Автоматично запускається через GitHub Actions при push.

## Структура:
- \`tests/ui\`: UI тести Playwright
- \`tests/api\`: API тести Axios
- HTML репорт: \`mochawesome-report/mochawesome.html\`
