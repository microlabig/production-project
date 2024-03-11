import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'asd',
                password: '123',
            },
        }),
    ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const IsLoading: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                isLoading: true,
            },
        }),
    ],
};

export const WithError: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'asd',
                password: '123',
                error: 'error',
            },
        }),
    ],
};
