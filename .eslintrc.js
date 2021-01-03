
module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['.storybook/**', 'stories/**'] },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/no-this-in-sfc': 0,
    'react/no-array-index-key': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'dot-notation' : 0,
    'react/destructuring-assignment': 0,
    'react/jsx-pascal-case': 1,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-associated-control': 0
  },
};
