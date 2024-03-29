import type { Meta, StoryObj } from '@storybook/react';

import { User, UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { WrapperStylesDecorator } from '@/shared/config/storybook/WrapperStylesDecorator';
import { DEFAULT_USER_AVATAR } from '@/shared/constants/constants';

import { AvatarDropDown } from './AvatarDropDown';

const data: User = {
    id: '1',
    username: 'admin',
    avatar: DEFAULT_USER_AVATAR,
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
