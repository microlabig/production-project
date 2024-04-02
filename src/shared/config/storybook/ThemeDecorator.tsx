import { StoryFn } from '@storybook/react';

// eslint-disable-next-line bzm-fsd-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/constants/theme';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className="app">
                <Story />
            </div>
        </ThemeProvider>
    );
