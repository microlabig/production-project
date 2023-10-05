import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: {
                    id: '1',
                    username: 'Vasya',
                },
            },
            {
                id: '2',
                text: 'hello world 2',
                user: {
                    id: '1',
                    username: 'Vasya',
                },
            },
        ],
    },
};

export const IsLoading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};
