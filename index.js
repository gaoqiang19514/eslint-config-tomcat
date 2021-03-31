const path = require('path');

module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true,
    },
    globals: {
        wx: true,
        qq: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2021,
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        'import/resolver': ['node', {
            webpack: {
                config: {
                    resolve: {
                        alias: {
                            '@': path.resolve('src'),
                        },
                        extensions: ['.js', '.jsx'],
                    },
                },
            },
        }],
    },
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/forbid-prop-types': ['off'],
        'react/require-default-props': ['off'],
        'jsx-a11y/no-static-element-interactions': ['off'],
        'jsx-a11y/click-events-have-key-events': ['off'],
        'jsx-a11y/mouse-events-have-key-events': ['off'],
        'jsx-a11y/label-has-associated-control': ['off'],
        'jsx-a11y/no-noninteractive-element-interactions': ['off'],

        // 允许省略图片的alt属性
        'jsx-a11y/alt-text': ['off'],

        // 允许在constructor外声明state
        'react/state-in-constructor': ['off'],

        // 允许在组件内声明静态属性
        'react/static-property-placement': ['off'],

        'global-require': ['off'],

        // 禁止使用变量解构 关闭
        'react/jsx-props-no-spreading': ['off'],

        // 禁止使用上下文存在的变量名 关闭
        'no-shadow': ['off'],

        // 禁止使用style['container'] 关闭
        'dot-notation': ['off'],

        // react.component结构顺序
        'react/sort-comp': [
            'error',
            {
                order: [
                    'static-methods',
                    'lifecycle',
                    'render',
                    'everything-else',
                ],
            },
        ],
    },
};
