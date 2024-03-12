import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortField } from '@/entities/Article';

import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
    title: 'features/Article/ArticleSortSelector',
    component: ArticleSortSelector,
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        order: 'asc',
        sort: ArticleSortField.VIEWS,
    },
};
