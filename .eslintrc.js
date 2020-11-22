module.exports = {
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
    ],
    env: {
      es6: true,
      node: true,
      browser: true,
    },
    parserOptions: {
      ecmaVersion: 8,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    ignorePatterns: ['/node_modules/**', '/build/**'],
    rules: {
      "react/prop-types": 0,
      'prettier/prettier': ['warn'],
  },  settings: {
    react: {
      version: 'detect',
    },
  },
};