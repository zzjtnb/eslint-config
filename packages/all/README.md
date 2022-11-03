# eslint-config-zzjtnb

[![npm](https://img.shields.io/npm/v/eslint-config-zzjtnb?color=a1b858&label=)](https://npmjs.com/package/eslint-config-zzjtnb)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- Designed to work with TypeScript, Vue out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint eslint-config-zzjtnb
```

>.eslintrc.json

For all:

```json
{
  "extends": ["zzjtnb"]
}
```

For Vue and Typescript:

```json
{
  "extends": ["zzjtnb/vue-ts"]
}
```

For Vue and JavaScript:

```json
{
  "extends": ["zzjtnb/vue"]
}
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

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
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

for vue js
- `zzjtnb/vue`

for vue ts
- `zzjtnb/vue-ts`

for js|html|yaml|json|jsonc|md:
- `zzjtnb-basic`

for typescript:
- `zzjtnb-ts`

for vue js
- `zzjtnb-vue`

for vue ts
- `zzjtnb-vue/ts`

All (`zzjtnb`) includes:

```json
{
  "extends": [
    "zzjtnb-basic",
    "zzjtnb-ts",
    "zzjtnb-vue"
  ]
}
```

### Related

- [eslint-config-zzjtnb-basic](https://www.npmjs.com/package/eslint-config-zzjtnb-basic)
- [eslint-config-zzjtnb-ts](https://www.npmjs.com/package/eslint-config-zzjtnb-ts)
- [eslint-config-zzjtnb-vue](https://www.npmjs.com/package/eslint-config-zzjtnb-vue)

## License

[MIT](./LICENSE) License &copy; 2022 [争逐](https://zzjtnb.com)
