import type { Meta, StoryObj } from '@storybook/react';

import { Rating } from '@/entities/Rating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

import ProfileRating from './ProfileRating';

const rating: Rating = {
    rate: 4,
    feedback: 'Good boy',
};

const meta = {
    title: 'features/ProfileRating',
    component: ProfileRating,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfileRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        id: '1',
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?userId=1&profileId=1`,
                method: 'GET',
                status: 200,
                response: [{ ...rating, id: '1' }],
            },
        ],
    },
};

export const NoRating: Story = {
    args: {
        id: '1',
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?userId=1&profileId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
            {
                url: `${__API__}/profile-ratings`,
                method: 'POST',
                status: 201,
                response: [],
            },
        ],
    },
};
