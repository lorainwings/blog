module.exports = {
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    parser: 'babel-eslint', // 词法解析器使用babel-eslint，以更好的适配es6的新api
    sourceType: 'module' // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
  },
  extends: [
    'airbnb-base',
    'eslint:recommended'
  ],
  rules: {
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': 0,
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'consistent-return': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'no-useless-escape': 0,
    'generator-star-spacing': 'off',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: false }
    ] // 没有使用的参数，不会报错。因为个人觉的把可用的参数写上去 有利于以后的维护。
  }
};
