module.exports = {
  parser: 'espree',
  extends: [
    './basic',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: 'espree',
      },
    },
  ],
}