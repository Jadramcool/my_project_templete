module.exports = {
  root: true,
  env: {
    browser: true, // browser global variables
    es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  parser: 'vue-eslint-parser',
  extends: [
    //   ESLint官方提供的Vue插件，可以检查 .vue文件中的语法错误。
    'plugin:vue/vue3-recommended',
    // TS基础规则
    'plugin:@typescript-eslint/recommended',
    // Airbnb基础规则
    'airbnb-base',
    // plugin:prettier/recommended的配置，一定要放在最后。因为extends中后引入的规则会覆盖前面的规则。
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', '@typescript-eslint', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  globals: {
    defineProps: 'readonly',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
