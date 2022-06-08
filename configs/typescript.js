module.exports = {
  parser: '@typescript-eslint/parser',
  extends:[
    'plugin:@typescript-eslint/recommended', 
    './basic',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
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
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
  },
}