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
  extends: [
    'eslint:recommended',
    // 'plugin:vue/recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    /* eslint:recommended */
    // semi: ['error', 'always'],
    indent: ['error', 2],
    'comma-spacing': ['error', {before: false, after: true}],

    //...

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
      'error',
      {
        singleline: {
          max: 2,
        },
        multiline: {
          max: 2,
        },
      },
    ],
  },
};
