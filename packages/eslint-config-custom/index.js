module.exports = {
  extends: ['next/core-web-vitals', 'turbo', 'plugin:prettier/recommended'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
}
