/**
 * ESLint configuration for the Vite + React project
 * - Uses eslint:recommended and plugin:react/recommended
 * - Enables modern ECMAScript+JSX
 * - Detects React version automatically
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react'
  ],
  rules: {
    // stylistic choices you can change to fit your project
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    'react/prop-types': 'warn',
    // React 17+ with new JSX transform doesn't require React in scope
    'react/react-in-jsx-scope': 'off'
  },
  overrides: [
    {
      files: ['**/*.test.*', 'test/**', 'src/**/*.test.*'],
      env: {
        jest: true
      },
      globals: {
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        vi: 'readonly'
      }
    }
  ]
};
