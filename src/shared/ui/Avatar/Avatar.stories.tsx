import type { Meta, StoryObj } from '@storybook/react';
import Image from '@/shared/assets/tests/avatar.jpg';

import { Avatar } from './Avatar';

const meta = {
    title: 'shared/Avatar',
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
