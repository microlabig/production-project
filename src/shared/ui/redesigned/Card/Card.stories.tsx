import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text/Text';

import { Card } from './Card';

const meta = {
    title: 'shared/Card',
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <Text title="title" text="text" />,
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: <Text title="title" text="text" />,
    },
};

export const Max: Story = {
    args: {
        children: <Text title="title" text="text" />,
        max: true,
    },
};
