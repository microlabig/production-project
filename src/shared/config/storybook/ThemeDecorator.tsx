import { StoryFn } from '@storybook/react';
import { Theme } from '@/shared/constants/theme';
import { ThemeProvider } from '@/shared/providers/theme-provider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className="app">
                <Story />
            </div>
        </ThemeProvider>
    );
