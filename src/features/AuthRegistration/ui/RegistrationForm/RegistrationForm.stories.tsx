import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

import RegistrationForm from './RegistrationForm';

const meta = {
    title: 'features/RegistrationForm',
    component: RegistrationForm,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof RegistrationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
