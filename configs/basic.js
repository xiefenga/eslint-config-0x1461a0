module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      globalReturn: false,
      impliedStrict: true,
    },
  },
  extends: ['eslint:recommended'],
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],

    'no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'varsIgnorePattern': '^_',
        // arguments
        'args': 'after-used',
        'argsIgnorePattern': '^_',
        // destructure
        'ignoreRestSiblings': false,
        'destructuredArrayIgnorePattern': '^_',
        // try catch
        'caughtErrors': 'all',
        'caughtErrorsIgnorePattern': '^_',
      },
    ],
    'curly': [
      'error',
      'all',
    ],
    'camelcase': [
      'error',
      {
        'properties': 'always',
        'ignoreImports': true,
      },
    ],
    'eqeqeq': [
      'error',
      'always',
      // for undefined == null
      { 'null': 'ignore' },
    ],
    'default-case': [
      'error',
      { 'commentPattern': '^no default$' },
    ],
    'default-case-last': 'error',

    'indent': ['error', 2],
    'no-var': 'error',
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      // never is defualt
      // 'imports': 'never',
      // 'exports': 'never',
      // 'functions': 'never'
    }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'computed-property-spacing': 'error',
    'brace-style': 'error',
  },
}