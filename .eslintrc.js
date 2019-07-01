module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': 'off', // process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': [0, 'error', 'windows'], // 允许windows开发环境
    'no-trailing-whitespace': false,
    'padded-blocks': ['error', 'never'],
    'no-unused-vars': 0, // 声明但未使用的变量，不要报错了
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
