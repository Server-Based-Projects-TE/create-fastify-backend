module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // '@typescript-eslint/no-unused-vars': 'off',
  },
};
