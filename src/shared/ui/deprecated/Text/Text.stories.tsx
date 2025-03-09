import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

import { Text, TextSize, TextTheme } from './Text';

const meta = {
    title: 'deprecated/shared/Text',
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

export const SizeS: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.S,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.M,
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.L,
    },
};
