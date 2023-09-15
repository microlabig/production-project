import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/providers/theme-provider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const PrimaryDark: Story = {
    ...Primary,
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};
export const OnlyTitleDark: Story = {
    ...OnlyTitle,
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyText: Story = {
    args: {
        text: 'Text',
    },
};

export const OnlyTextDark: Story = {
    ...OnlyText,
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};
