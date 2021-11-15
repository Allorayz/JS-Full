import { rules } from 'eslint-config-prettier';

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: 'path/to/config.js',
    },
  },
};
export const rules = {
  'no-console': 0,
  'import/prefer-default-export': 0,
  'prefer-template': 0,
};
