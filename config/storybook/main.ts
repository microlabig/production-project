import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false, // 👈 disable the backgrounds addon
            },
        },
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: false,
    },
};
export default config;
