import type { Meta, StoryObj } from '@storybook/react';

import RegistrationForm from './RegistrationForm';

const meta = {
    title: 'shared/RegistrationForm',
    component: RegistrationForm,
} satisfies Meta<typeof RegistrationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
