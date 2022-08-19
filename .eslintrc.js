module.exports = {
    root: true,
    env: {
        es6: true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
        node: true
    },
    'extends': [
        'plugin:vue/essential'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        //代码块前面需要加空格
        "space-before-blocks": [
            2,
            "always"
        ],
        // 强制选择加分号
        "semi": [
            2,
            "always"
        ],
    }
}
