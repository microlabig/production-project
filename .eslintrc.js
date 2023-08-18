module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb-typescript',
        'plugin:react-hooks/recommended',
        'plugin:i18next/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        warnOnUnsupportedTypeScriptVersion: false,
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-return-await': 'off',
        'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
        'react-hooks/exhaustive-deps': 'warn', // Проверяем зависимости эффекта

        '@typescript-eslint/naming-convention': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
            'error',
            {
                selector: 'property',
                format: ['strictCamelCase'],
                filter: {
                    // you can expand this regex to add more allowed names
                    regex: '^__',
                    match: false,
                },
            },
        ],

        'i18next/no-literal-string': ['error', { markupOnly: true }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
