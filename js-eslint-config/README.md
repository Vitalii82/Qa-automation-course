# js-eslint-config
recommended config from me for programming on a JavaScript

In order to use this config you have to install the following NPM packages
```
npm i -D @eslint/js eslint globals eslint-plugin-unicorn
```

Then put eslint.config.mjs and .prettierrc into your base directory

you can add a script to your package.json
```
"scripts": {
  "lint": "eslint src/",
  "build": "npm run lint && <build script>",
}
```
