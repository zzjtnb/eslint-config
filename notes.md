The default branch has been renamed!
If you have a local clone, you can update it by running the following commands.

```
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```

create a new repository on the command line

```bash
echo "# eslint-config" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/zzjtnb/eslint-config.git
git push -u origin master
```

push an existing repository from the command line

```bash
git remote add origin https://github.com/zzjtnb/eslint-config.git
git branch -M master
git push -u origin master
```

## pnpm link

- creat link

```bash
# 当前文件夹根目录
pnpm link --global
# 要使用的文件夹
pnpm link --global eslint-config-zzjtnb-monorepo
```

查看全局安装的包

```bash
pnpm ls --global --depth 0
```

- unlink

```bash
pnpm unlink eslint-config-zzjtnb-monorepo --global
```

windows 使用 npm 安装的 pnpm 无效使用 unlink 无效

```bash
pnpm remove eslint-config-zzjtnb-monorepo --global
```

## pnpm pack

- 创建 tarball

```bash
#git bash
# 从package创建一个 tarball
# pnpm pack --pack-destination <dir>
pnpm pack --pack-destination ~
```

- 使用

```bash
#git bash
# pnpm i -D ~/package-name-0.0.0.tgz
```

## Directory Description

```bash
eslint-config
├── LICENSE
├── README.md
├── package.json
├── packages # all have index.js and package.json + additional exports
│   ├── all # could be just consisting from 'extends' statements
│   ├── basic
│   ├── typescript
│   └── vue
└── pnpm-workspace.yaml
```

除了 all 之外, 所有这些包名称都直接后缀为 `eslint-config-zzjtnb-<pkg>`

all 的包名目录为：`eslint-config-zzjtnb`

## 配置说明

```bash
#packages/all/package.json
"name": "@zzjtnb/eslint-config",
"dependencies": {
  "@zzjtnb/eslint-config-basic": "workspace:*",
  "@zzjtnb/eslint-config-ts": "workspace:*",
  "@zzjtnb/eslint-config-vue": "workspace:*",
}
```

dependencies 中的 key 是 packages 文件夹下每个文件夹中的 package.json 的 name

### scoped modules

#### 默认

```bash
#packages/all/package.json
"name": "@zzjtnb/eslint-config",
#packages/basic/package.json
"name": "@zzjtnb/eslint-config-basic",
#packages/typescript/package.json
"name": "@zzjtnb/eslint-config-ts",
#packages/vue/package.json
"name": "@zzjtnb/eslint-config-vue",
```

对应 eslint 配置

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@zzjtnb',
    '@zzjtnb/basic',
    '@zzjtnb/ts',
    '@zzjtnb/vue',
  ],
}
```

#### 第二种

```js
// packages/all/vue/ts.js
module.exports = {
  extends: [
    // package.json 中 name:@xxx/eslint-config 这种是作用域
    // 在 eslint 配置 extends 的时候不能省略`packages/*/package.json`中 的 name
    '@zzjtnb/eslint-config-ts',
    //  #packages/vue/package.json
    // "name": "@zzjtnb/eslint-config-vue"
    '@zzjtnb/eslint-config-vue',
  ],
  rules: {},
}
```

对应 eslint 配置

```js
// .eslintrc.js
// vue-ts是packages/all下面的文件名,
// 需要在#packages/all/package.json中的中写入 files:["vue-ts.js"]
// 不能省略@zzjtnb/eslint-config
module.exports = {
  extends: [
    '@zzjtnb/eslint-config/vue-ts',
  ],
}
```

发布命令

```bash
pnpm -r publish --access public
```

### 普通

#### 默认的

```js
// .eslintrc.js
module.exports = {
  extends: [
    // 对应packages/all/basic|ts|vue/index|vue/ts*.js,写入packages/all/package.json中的files
    // "files": [ "index.js","basic.js","ts.js","vue/ts.js","vue/index.js"]
    'zzjtnb',
    'zzjtnb-basic',
    'zzjtnb-ts',
    'zzjtnb-vue',
    'zzjtnb/basic',
    'zzjtnb/ts',
    'zzjtnb/vue',
    'zzjtnb/vue/ts',
  ],
}
```

```bash
#packages/all/package.json
"name": "eslint-config-zzjtnb",
```

### 第二种

在 all 文件夹下面新建

```js
// packages/all/basic.js
module.exports = {
  extends: [
    /**
     * 对应
     * packages/basic/package.json
     * "name": "eslint-config-zzjtnb-basic",
     */
    'eslint-config-zzjtnb-basic',
  ],
}
// packages/all/ts.js
module.exports = {
  extends: [
    // 同 packages/all/basic.js
    'eslint-config-zzjtnb-basic',
    /**
     * 对应
     * packages/typescript/package.json
     * "name": "eslint-config-zzjtnb-ts",
     */
    'eslint-config-zzjtnb-ts',
  ],
}
// packages/all/vue/index.js
module.exports = {
  extends: [
    /**
     * 对应
     * packages/vue/package.json
     * "name": "@zzjtnb/eslint-config-vue",
     */
    'eslint-config-zzjtnb-vue',
  ],
}
// packages/all/vue/ts.js
module.exports = {
  extends: [
    // 这两个对应上面的
    'eslint-config-zzjtnb-ts',
    'eslint-config-zzjtnb-vue',
  ],
}
```

对应 eslint 配置

```js
// .eslintrc.js
module.exports = {
  extends: [
    // 对应packages/all/basic|ts|vue/index|vue/ts*.js,写入packages/all/package.json中的files
    // "files": [ "index.js","basic.js","ts.js","vue/ts.js","vue/index.js"]
    'zzjtnb',
    'zzjtnb-basic',
    'zzjtnb-ts',
    'zzjtnb-vue',
    'zzjtnb/basic',
    'zzjtnb/ts',
    'zzjtnb/vue',
    'zzjtnb/vue/ts',
  ],
}
```

发布命令

```bash
pnpm -r publish
```

建立软链接
>windows cmd

```bash
mklink
# MKLINK [[/D] | [/H] | [/J]] Link Target

#         /D      创建目录符号链接。默认为文件
#                 符号链接。
#         /H      创建硬链接而非符号链接。
#         /J      创建目录联接。
#         Link    指定新的符号链接名称。
#         Target  指定新链接引用的路径
#                 (相对或绝对)
```

创建目录符号链接. 默认为文件

```bash
mklink /d .\README.md .\packages\all\README.md
```

删除的话直接删除 Link(.\README.md)

查看所有配置

```bash
# Print the configuration for the given file
# 打印给定文件的配置
eslint --print-config file.js > eslintconifg.json
```

```bash
eslint --print-config file.js > ./tests/config/js.json;
eslint --print-config file.cjs > ./tests/config/cjs.json;
eslint --print-config file.ts > ./tests/config/ts.json;
eslint --print-config file.md > ./tests/config/md.json;
eslint --print-config file.yml > ./tests/config/yml.json;
eslint --print-config file.vue > ./tests/config/vue.json;
eslint --print-config file.html > ./tests/config/html.json;
```

pnpm 升级包

```
可以在最外面升级workspace下面的所有的package.json
pnpm up -r --workspace
更新所有依赖项，此操作会忽略 package.json 指定的范围
pnpm up --latest
```

## .eslintrc.js 和 eslint.config.js 的区别

.eslintrc.js 和 eslint.config.js 都是 ESLint 配置文件的文件名。

.eslintrc.js 文件是 ESLint 的默认配置文件，并且它必须放置在项目的根目录中。如果你使用 .eslintrc.js 文件作为你的配置文件，ESLint 将自动加载该文件中的配置。

eslint.config.js 文件是相对较新的方式来配置 ESLint，并且可以放置在任何位置。如果你使用 eslint.config.js 文件作为你的配置文件，你需要在运行 ESLint 时指定该文件的路径，例如：eslint --config path/to/eslint.config.js。

两种配置文件的格式都是相同的，它们都是 JavaScript 模块，导出一个包含配置选项的对象。你可以使用这些配置文件来设置 ESLint 的规则、解析器、插件、解析选项等。

在没有显式指定配置文件的情况下，ESLint 将会按以下顺序查找配置文件：.eslintrc.js、.eslintrc.yaml、.eslintrc.yml、.eslintrc.json 和 .eslintrc。如果在项目根目录中找不到这些文件，则 ESLint 将会停止查找并使用默认配置。

总之，.eslintrc.js 是 ESLint 的默认配置文件名，必须放置在项目根目录中。而 eslint.config.js 是一种相对较新的配置文件名，可以放置在任何位置，并且需要在运行 ESLint 时显式指定该文件的路径。两种配置文件的格式都是相同的，并且都可以用来设置 ESLint 的规则、解析器、插件和解析选项等。

## ESLINT_USE_FLAT_CONFIG

ESLINT_USE_FLAT_CONFIG 是一个用于指定 ESLint 配置文件格式是否支持扁平化的环境变量。如果将其设置为 true，则 ESLint 将尝试从扁平化的配置文件中加载配置选项。否则，它将只从对象形式的配置文件中加载配置选项。

你可以在以下位置之一配置 ESLINT_USE_FLAT_CONFIG：

在命令行中使用 ESLINT_USE_FLAT_CONFIG 环境变量。例如：

📋 Copy code

```bash
ESLINT_USE_FLAT_CONFIG=true eslint .
```

在 package.json 文件中使用 ESLINT_USE_FLAT_CONFIG 字段。例如：

📋 Copy code

```json
{
  "name": "my-app",
  "scripts": {
    "lint": "ESLINT_USE_FLAT_CONFIG=true eslint ."
  }
}
```

在这个示例中，我们将 ESLINT_USE_FLAT_CONFIG 设置为 true，并将其包含在 lint 脚本中。

在 .env 文件中设置 ESLINT_USE_FLAT_CONFIG 环境变量。例如：
📋 Copy code

```js
ESLINT_USE_FLAT_CONFIG = true
```

在这个示例中，我们将 ESLINT_USE_FLAT_CONFIG 设置为 true，并将其包含在 .env 文件中。请注意，如果你使用 .env 文件来设置环境变量，则需要使用 dotenv 等工具来加载这些变量。

请注意，如果你在配置中使用扁平化的格式，但未将 ESLINT_USE_FLAT_CONFIG 设置为 true，ESLint 将会抛出一个错误。
