import type { Meta, StoryObj } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Profile } from '../../model/types/profileSchema';

import { ProfileCard } from './ProfileCard';

import avatar from '@/shared/assets/tests/avatar.jpg';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const primaryArgs: { data?: Profile } = {
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
};

export const Primary: Story = {
    args: primaryArgs,
};

export const PrimaryRedesigned: Story = {
    args: primaryArgs,
    decorators: [NewDesignDecorator],
};

export const PrimaryRedesignedDark: Story = {
    args: primaryArgs,
    decorators: [NewDesignDecorator, ThemeDecorator(Theme.DARK)],
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const Error: Story = {
    args: {
        error: 'error',
    },
};
