import type { Meta, StoryObj } from '@storybook/react';

import { Rating } from '@/entities/Rating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

import ArticleRating from './ArticleRating';

const rating: Rating = {
    rate: 4,
    feedback: 'Yeah boy',
};

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        id: '1',
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
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
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
            {
                url: `${__API__}/article-ratings`,
                method: 'POST',
                status: 201,
                response: [],
            },
        ],
    },
};
