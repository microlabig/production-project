import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

import Image from '@/shared/assets/tests/avatar.jpg';

const meta = {
    title: 'deprecated/shared/Avatar',
    component: Avatar,
    args: {
        src: Image,
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Small: Story = {
    args: {
        size: 50,
    },
};
