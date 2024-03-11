import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

import { PageError } from './PageError';

const meta = {
    title: 'widget/PageError',
    component: PageError,
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        error: new Error('error'),
        errorInfo: null,
    },
};

export const DARK: Story = {
    ...Light,
    decorators: [ThemeDecorator(Theme.DARK)],
};
