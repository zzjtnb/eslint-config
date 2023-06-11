# eslint-config-zzjtnb

[![npm](https://img.shields.io/npm/v/eslint-config-zzjtnb?color=a1b858&label=)](https://npmjs.com/package/eslint-config-zzjtnb)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- Designed to work with TypeScript, JavaScript,Vue out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint eslint-define-config eslint-config-zzjtnb
```

>.eslintrc.js

For all:

```js
/* eslint-env node */
// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: [
    'zzjtnb',
  ],
})
```

For JavaScript:

```js
/* eslint-env node */
// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: [
    'zzjtnb/basic',
  ],
})
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```jsonc
{
  "prettier.enable": false,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "html",
    "vue",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "yml"
  ]
}
```

## Contents:

ESLint configs:
for all:
- `zzjtnb`

for js|html|yaml|json|jsonc|md:
- `zzjtnb/basic`

for typescript:
- `zzjtnb/ts`

For vue and typescript or javaScript:
- `zzjtnb/vue`

for js|html|yaml|json|jsonc|md:
- `zzjtnb-basic`

for typescript:
- `zzjtnb-ts`

For vue and typescript or javaScript:
- `zzjtnb-vue`

All (`zzjtnb`) includes:

```js
/* eslint-env node */
// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: [
    'zzjtnb',
    // 'zzjtnb/basic',
    // 'zzjtnb/ts',
    // 'zzjtnb/vue',
    // "zzjtnb-basic"
    // "zzjtnb-ts"
    // 'zzjtnb-vue',
  ],
})
```

### Related

- [eslint-config-zzjtnb-basic](https://www.npmjs.com/package/eslint-config-zzjtnb-basic)
- [eslint-config-zzjtnb-ts](https://www.npmjs.com/package/eslint-config-zzjtnb-ts)
- [eslint-config-zzjtnb-vue](https://www.npmjs.com/package/eslint-config-zzjtnb-vue)

- [stylelint-config-zzjtnb](https://www.npmjs.com/package/stylelint-config-zzjtnb)

## License

[MIT](./LICENSE) License &copy; 2022 [争逐](https://zzjtnb.com)
