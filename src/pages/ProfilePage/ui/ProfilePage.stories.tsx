import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/avatar.jpg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/providers/theme-provider';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage/ProfilePage',
    component: ProfilePage,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                data: {
                    username: 'admin',
                    age: 22,
                    country: Country.Ukraine,
                    lastname: 'ulbi tv',
                    first: 'asd',
                    city: 'asf',
                    currency: Currency.USD,
                    avatar,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                data: {
                    username: 'admin',
                    age: 22,
                    country: Country.Ukraine,
                    lastname: 'ulbi tv',
                    first: 'asd',
                    city: 'asf',
                    currency: Currency.USD,
                    avatar,
                },
            },
        }),
    ],
};
