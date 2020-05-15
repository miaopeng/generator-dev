module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {},
  rules: {
    'no-undef': 2,
    camelcase: 0,
    'global-require': 0,
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-console': 0,
    'no-restricted-globals': 0,
    'no-underscore-dangle': 0,
    'linebreak-style': 0,
    'no-plusplus': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    // issue https://github.com/facebook/react/issues/15204
    'react-hooks/exhaustive-deps': 'off' // Checks effect dependencies
  },
  settings: {
    polyfills: ['fetch', 'Promises', 'URL']
  }
};
