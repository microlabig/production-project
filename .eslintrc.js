module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended',
        'plugin:import/recommended',
    ],
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'i18next',
        'prettier',
        'import',
        'unused-imports',
        'bzm-fsd-plugin',
    ],
    rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'warn',
        'prettier/prettier': 'error',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'react/jsx-props-no-spreading': ['off'],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'as',
                    'role',
                    'to',
                    'data-testid',
                    'target',
                    'justify',
                    'align',
                    'direction',
                    'gap',
                    'border',
                    'autoComplete',
                ],
            },
        ],
        'implicit-arrow-linebreak': ['off'],
        'react/destructuring-assignment': ['off'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/naming-convention': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'no-param-reassign': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        indent: 'off',
        'no-extra-boolean-cast': 'off',
        'react/no-array-index-key': 'off',
        'react/no-unstable-nested-components': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-debugger': 'error',

        'unused-imports/no-unused-imports': 'error',

        'import/order': [
            // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/order.md
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: './**.module.*',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],

        // Мои кастомные правила
        'bzm-fsd-plugin/path-checker': [
            'error',
            {
                alias: '@',
            },
        ],
        'bzm-fsd-plugin/fsd-public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
            },
        ],
        'bzm-fsd-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
