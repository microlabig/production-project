import type { Meta, StoryObj } from '@storybook/react';

import { ProfileRating } from './ProfileRating';

const meta = {
    title: 'features/ProfileRating',
    component: ProfileRating,
} satisfies Meta<typeof ProfileRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        id: '1',
    },
};
