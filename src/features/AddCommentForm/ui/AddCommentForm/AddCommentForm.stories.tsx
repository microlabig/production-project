import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

import AddCommentForm from './AddCommentForm';

const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [StoreDecorator({})],
};
