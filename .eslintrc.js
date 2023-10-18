// .eslintrc.js
module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  env: {
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  rules: {
    /* eslint:recommended */
    indent: ['error', 2],
    'comma-spacing': ['error', {before: false, after: true}],
    'no-unused-vars': 'warn',

    'vue/singleline-html-element-content-newline': 'off',

    /* plugin:vue/vue3-essential */
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': ['error'],
    'vue/html-end-tags': ['error'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
        },
      },
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 5,
        },
        multiline: {
          max: 2,
        },
      },
    ],
  },
};
