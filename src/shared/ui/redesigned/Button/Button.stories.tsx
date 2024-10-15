import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

import { Button } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: 'clear',
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'l',
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'xl',
    },
};

export const OutlineDark: Story = {
    ...Outline,
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Disabled: Story = {
    args: {
        children: '>',
        variant: 'outline',
        disabled: true,
    },
};

export const FullWidth: Story = {
    args: {
        children: 'Press me',
        variant: 'outline',
        fullWidth: true,
    },
};
