import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/providers/theme-provider';
import { AppNavLink, AppNavLinkTheme } from './AppNavLink';

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
    args: {
        theme: AppNavLinkTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    ...Primary,
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
    args: {
        theme: AppNavLinkTheme.SECONDARY,
    },
};

export const SecondaryDark: Story = {
    ...Secondary,
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
    args: {
        theme: AppNavLinkTheme.RED,
    },
};

export const RedDark: Story = {
    ...Red,
    decorators: [ThemeDecorator(Theme.DARK)],
};
