/**
 * export all
 * extends 多个模块,如果规则冲突,位置靠后的包将覆盖前面的.
 * rules 中的规则相同,并且优先级恒定高于 extends
 */
// console.log('zzjtnb/index')
module.exports = {
  extends: [
    'eslint-config-zzjtnb-basic',
    'eslint-config-zzjtnb-ts',
    'eslint-config-zzjtnb-vue',
  ],
}
