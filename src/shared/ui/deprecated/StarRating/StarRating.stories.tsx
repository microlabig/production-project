import type { Meta, StoryObj } from '@storybook/react';

import { StarRating } from './StarRating';

const meta = {
    title: 'deprecated/shared/StarRating',
    component: StarRating,
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Size50: Story = {
    args: {
        size: 50,
    },
};

export const Selected2: Story = {
    args: {
        selectedStars: 2,
    },
};
