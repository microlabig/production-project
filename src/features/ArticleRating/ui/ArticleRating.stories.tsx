import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        id: '1',
    },
};
