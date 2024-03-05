import type { Preview } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/providers/theme-provider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator, SuspenseDecorator],
};

export default preview;
