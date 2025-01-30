# ts-eslint-config
recommended config from me for programming on a TypeScript

In order to use this config you have to install the following NPM packages
```
npm i -D typescript ts-node eslint typescript-eslint @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser @stylistic/eslint-plugin @stylistic/eslint-plugin-ts eslint-plugin-prettier eslint-plugin-unicorn prettier globals
```

Then put eslint.config.mjs into your base directory

you can add a script to your package.json
```
"scripts": {
  "lint": "eslint src/",
  "build": "npm run lint && tsc --build",
}
```
