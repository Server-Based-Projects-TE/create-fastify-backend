module.exports = {
  extends: ['../.eslintrc.js', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/expect-expect': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
  },
  env: {
    'jest/globals': true,
  },
};
