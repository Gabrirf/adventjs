
import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import globals from 'globals';

// TODO Remove .eslintrc.json

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: babelParser,
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      'no-unused-vars': ['warn'],
      'prefer-const': ['warn'],
      'no-multi-spaces': [
        'error',
        {
          exceptions: {
            Property: false,
          },
        },
      ],
      'keyword-spacing': ['error'],
      'space-before-blocks': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'prefer-template': ['error'],
    },
  },
];
