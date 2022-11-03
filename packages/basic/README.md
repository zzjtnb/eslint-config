# eslint-config-zzjtnb-basic

ESLint suggestions configuration aimed to have balanced aspects. A part of [eslint-config-zzjtnb](https://www.npmjs.com/package/eslint-config-zzjtnb).

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- Designed to work with  json, yaml, markdown out-of-box
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint-config-zzjtnb-basic
```

>.eslintrc.json

```json
{
  "extends": ["eslint-config-zzjtnb-basic"]
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

### Related

- [eslint-config-zzjtnb-ts](https://www.npmjs.com/package/eslint-config-zzjtnb-ts)
- [eslint-config-zzjtnb-vue](https://www.npmjs.com/package/eslint-config-zzjtnb-vue)

## License

[MIT](./LICENSE) License &copy; 2022 [争逐](https://zzjtnb.com)
