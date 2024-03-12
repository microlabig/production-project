import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleType } from '@/entities/Article';

import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
    title: 'features/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    args: {
        onChange: action('onChange'),
    },
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
    args: {
        value: ArticleType.ALL,
    },
};

export const Economic: Story = {
    args: {
        value: ArticleType.ECONOMIC,
    },
};

export const It: Story = {
    args: {
        value: ArticleType.IT,
    },
};

export const Science: Story = {
    args: {
        value: ArticleType.SCIENCE,
    },
};
