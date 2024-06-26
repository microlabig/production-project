import type { Meta, StoryObj } from '@storybook/react';

import { ArticlePageGreeting } from './ArticlePageGreeting';

const meta = {
    title: 'features/Article/ArticlePageGreeting',
    component: ArticlePageGreeting,
} satisfies Meta<typeof ArticlePageGreeting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
