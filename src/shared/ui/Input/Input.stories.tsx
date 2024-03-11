import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        placeholder: 'Placeholder',
        value: 'value',
    },
};

export const Dark: Story = {
    ...Light,
    decorators: [ThemeDecorator(Theme.DARK)],
};
