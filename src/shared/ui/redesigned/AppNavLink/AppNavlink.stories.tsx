import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

import { AppNavLink } from './AppNavLink';

const meta = {
    title: 'shared/AppNavLink',
    component: AppNavLink,
    args: {
        children: 'Text',
        to: '',
    },
} satisfies Meta<typeof AppNavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const PrimaryDark: Story = {
    ...Primary,
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
    args: {
        variant: 'red',
    },
};

export const RedDark: Story = {
    ...Red,
    decorators: [ThemeDecorator(Theme.DARK)],
};
