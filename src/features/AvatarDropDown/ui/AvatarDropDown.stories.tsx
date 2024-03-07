import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropDown } from './AvatarDropDown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { User, UserRole } from '@/entities/User';
import { WrapperStylesDecorator } from '@/shared/config/storybook/WrapperStylesDecorator';

const data: User = {
    id: '1',
    username: 'admin',
    avatar: 'https://placehold.co/24x24',
    roles: [UserRole.ADMIN],
};

const meta = {
    title: 'features/AvatarDropDown',
    component: AvatarDropDown,
    decorators: [
        StoreDecorator({
            user: {
                authData: data,
            },
        }),
        WrapperStylesDecorator({
            marginLeft: 'auto',
            width: 'fit-content',
        }),
    ],
} satisfies Meta<typeof AvatarDropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
