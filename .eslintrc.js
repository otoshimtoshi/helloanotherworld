module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-essential'
  ],
  plugins: [],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-deprecated-v-on-native-modifier': 0,
    'vue/html-self-closing': 0
  }
};
