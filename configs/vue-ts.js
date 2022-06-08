module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    './basic',
    './typescript',
    'plugin:vue/vue3-recommended',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        js: 'espree', // for `<script>`
        ts: '@typescript-eslint/parser', // for `<script lang="ts">`
      },
    },
  ],
}