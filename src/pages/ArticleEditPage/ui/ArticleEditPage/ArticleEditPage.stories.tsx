import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ArticleEditPage from './ArticleEditPage';

const meta = {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
