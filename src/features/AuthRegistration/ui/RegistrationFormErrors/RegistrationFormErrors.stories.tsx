import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

import { RegistrationFormErrors } from './RegistrationFormErrors';

const meta = {
    title: 'features/RegistrationFormErrors',
    component: RegistrationFormErrors,
    decorators: [
        StoreDecorator({
            registrationForm: {
                error: 'new Error()',
            },
        }),
    ],
} satisfies Meta<typeof RegistrationFormErrors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
