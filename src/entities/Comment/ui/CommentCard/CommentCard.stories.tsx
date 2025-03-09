import type { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';

import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    args: {
        comment: {
            id: '1',
            text: 'Text',
            user: {
                id: '1',
                username: 'username',
            },
        },
    },
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
export const NormalRedesigned: Story = {
    decorators: [NewDesignDecorator],
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
};
