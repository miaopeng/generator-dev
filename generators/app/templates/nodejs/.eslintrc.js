module.exports = {
  extends: ['google', 'prettier'],
  env: {
    node: true,
    es6: true
  },
  globals: {},
  rules: {
    camelcase: 0,
    'global-require': 0,
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-console': 0,
    'no-restricted-globals': 0,
    'no-underscore-dangle': 0,
    'linebreak-style': 0,
    'no-plusplus': 0
  }
};
