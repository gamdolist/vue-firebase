module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // "eslint-disable-next-line": true,
    // "eslint-disable": true,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': ['off', 'single'],
    "no-tabs": ["error", {
      allowIndentationTabs: false
    }],
    "space-before-function-paren": ["error", "never"],
    // "space-before-function-paren": ["error", {
    //   "anonymous": "always",
    //   "named": "always",
    //   "asyncArrow": "always"
    // }],
  }
}
