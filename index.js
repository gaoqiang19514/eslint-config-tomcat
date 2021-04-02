const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    wx: true,
    qq: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': [
      'node',
      {
        webpack: {
          config: {
            resolve: {
              alias: {
                '@': path.resolve('src'),
              },
              extensions: ['.js', '.jsx'],
            },
          },
        },
      },
    ],
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
