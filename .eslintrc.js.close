

/*
找到自己本身错误的原因在这里特别记录一下（未能正确自动格式化）
1  未在vscode右下角开启Eslint  需要点击下
'extends': [
  'plugin:vue/vue3-essential',
  '@vue/standard',
  '@vue/typescript/recommended'
],
  parserOptions: {
    ecmaVersion: 2020
  },
*/  
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: { 
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
