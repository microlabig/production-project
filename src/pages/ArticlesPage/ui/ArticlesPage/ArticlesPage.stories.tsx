import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import ArticlesPage from './ArticlesPage';

const meta = {
    title: 'pages/ArticlePage/ArticlesPage',
    component: ArticlesPage,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
