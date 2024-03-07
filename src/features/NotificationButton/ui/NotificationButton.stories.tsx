import type { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Notification } from '@/entities/Notification/model/types/notificationSchema';
import { WrapperStylesDecorator } from '@/shared/config/storybook/WrapperStylesDecorator';

const notifications: Notification[] = [
    {
        id: '1',
        title: 'Уведомление 1',
        description: 'Произошло какое-то событие',
    },
    {
        id: '2',
        title: 'Уведомление 2',
        description: 'Произошло какое-то событие',
        href: 'http://localhost:3000/admin',
    },
];

const meta = {
    title: 'features/Notification/NotificationButton',
    component: NotificationButton,
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: notifications,
            },
        ],
    },
    decorators: [
        StoreDecorator({}),
        WrapperStylesDecorator({
            marginLeft: 'auto',
            width: 'fit-content',
        }),
    ],
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
