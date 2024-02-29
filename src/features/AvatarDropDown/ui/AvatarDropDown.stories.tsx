import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropDown } from './AvatarDropDown';

const meta = {
    title: 'shared/AvatarDropDown',
    component: AvatarDropDown,
} satisfies Meta<typeof AvatarDropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
