module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
      'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  env: {
      browser: true,
      es6: true,
      node: true,
  },
  rules: {
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
  },
};

// module.exports =  {
//   parser:  '@typescript-eslint/parser',
//   extends:  [
//     'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
//   ],
//   parserOptions:  {
//     ecmaVersion:  2018,
//     sourceType:  'module',
//   },
//   rules:  {
//   },
// };