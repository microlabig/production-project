import type { Meta, StoryObj } from '@storybook/react';

import { Country } from '../model/types/country';

import { CountrySelect } from './CountrySelect';

const meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: Country.USA,
    },
};
