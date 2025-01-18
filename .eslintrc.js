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
        // 'plugin:import/recommended',
    ],
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'i18next',
        'prettier',
        'import',
        'unused-imports',
        'simple-import-sort',
        'bzm-fsd-plugin',
    ],
    rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'warn',
        'prettier/prettier': 'error',
        // 'react/jsx-indent': [2, 4],
        // 'react/jsx-indent-props': [2, 4],
        // indent: [2, 4],
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
                    'dataTestId',
                    'target',
                    'justify',
                    'align',
                    'direction',
                    'gap',
                    'border',
                    'autoComplete',
                    'feature',
                    'color',
                    'variant',
                    'size',
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
        'no-extra-boolean-cast': 'off',
        'react/no-array-index-key': 'off',
        'react/no-unstable-nested-components': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',

        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-debugger': 'error',

        'unused-imports/no-unused-imports': 'error',

        'simple-import-sort/imports': [
            // https://dev.to/receter/automatic-import-sorting-in-vscode-275m
            'warn',
            {
                groups: [
                    // 1. Side effect imports at the start. For me this is important because I want to import reset.css and global styles at the top of my main file.
                    ['^\\u0000'],
                    // 2. `react` and packages: Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                    ['^react$', '^@?\\w'],
                    ['^redux$', '^@?\\w'],
                    ['^@storybook$', '^@?\\w'],
                    // 3. Absolute imports and other imports such as Vue-style `@/foo`.
                    // Anything not matched in another group. (also relative imports starting with "../")
                    ['^@', '^'],
                    // 4. relative imports from same folder "./" (I like to have them grouped together)
                    ['^\\./'],
                    // 5. media imports
                    ['^.+\\.(gif|png|svg|jpg)$'],
                    // 6. style module imports always come last, this helps to avoid CSS order issues
                    ['^.+\\.(module.css|module.scss)$'],
                ],
            },
        ],

        // 'import/order': [
        // неподошел
        //     // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/order.md
        //     'error',
        //     {
        //         groups: ['builtin', 'external', 'internal'],
        //         pathGroups: [
        //             {
        //                 pattern: 'react**',
        //                 group: 'external',
        //                 position: 'before',
        //             },
        //             {
        //                 pattern: '@/**',
        //                 group: 'external',
        //                 position: 'after',
        //             },
        //             {
        //                 pattern: './**.module.*',
        //                 group: 'internal',
        //                 position: 'after',
        //             },
        //         ],
        //         pathGroupsExcludedImportTypes: ['react'],
        //         'newlines-between': 'always',
        //         alphabetize: {
        //             order: 'asc',
        //             caseInsensitive: true,
        //         },
        //     },
        // ],

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
        // for storybook
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
        
        // for cypress
        {
            files: [
                '**/cypress/**/*.{ts,tsx}',
                '**/cypress/**/*.cy.{ts,tsx}',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
                tsconfigRootDir: __dirname,
                project: ['./cypress/tsconfig.json'],
            },
            rules: {
                "@typescript-eslint/no-namespace": "off"
            }
        }
    ]
};
