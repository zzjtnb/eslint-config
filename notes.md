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
// .eslintrc.cjs
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
// .eslintrc.cjs
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
// .eslintrc.cjs
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
// .eslintrc.cjs
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
创建目录符号链接.默认为文件
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
