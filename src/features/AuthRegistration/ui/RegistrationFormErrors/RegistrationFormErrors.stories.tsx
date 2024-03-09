import type { Meta, StoryObj } from '@storybook/react';

import { RegistrationFormErrors } from './RegistrationFormErrors';

const meta = {
    title: 'shared/RegistrationFormErrors',
    component: RegistrationFormErrors,
} satisfies Meta<typeof RegistrationFormErrors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
