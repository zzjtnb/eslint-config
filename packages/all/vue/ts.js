// console.log('\x1B[36;1m zzjtnb/vue/ts')
module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',

      },
    },
  ],
  extends: [
    'eslint-config-zzjtnb-ts',
    'eslint-config-zzjtnb-vue',
  ],
}
