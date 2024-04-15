require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript',
    '@vue/eslint-config-prettier',
  ],

  plugins: ['import', 'unused-imports'],

  parserOptions: {
    ecmaVersion: 'latest',
  },

  rules: {
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'unused-imports/no-unused-imports-ts': 'error',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/typedef': [
      'error',
      {
        variableDeclaration: false,
        memberVariableDeclaration: true,
        propertyDeclaration: true,
        variableDeclarationIgnoreFunction: true,
        arrayDestructuring: true,
        objectDestructuring: true,
        parameter: true,
        arrowParameter: true,
      },
    ],
  },
};