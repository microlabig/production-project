import type { Preview } from '@storybook/react';

import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen', // без паддингов сторибука
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: Theme.LIGHT, color: '#fff' },
                { name: 'dark', class: Theme.DARK, color: '#000' },
                { name: 'orange', class: Theme.ORANGE, color: '#ffb005' },
            ],
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
        FeaturesFlagsDecorator({}),
    ],
};

export default preview;
