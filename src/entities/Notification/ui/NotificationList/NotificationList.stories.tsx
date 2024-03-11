import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

import { NotificationList } from './NotificationList';
import { Notification } from '../../model/types/notificationSchema';

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
    {
        id: '3',
        title: 'Уведомление 3',
        description: 'Произошло какое-то событие',
        href: 'http://localhost:3000/admin',
    },
    {
        id: '4',
        title: 'Уведомление 4',
        description: 'Произошло какое-то событие',
    },
    {
        id: '5',
        title: 'Уведомление 1',
        description: 'Произошло какое-то событие',
    },
];

const meta = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
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
};

export const IsLoading: Story = {
    args: {},
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: notifications,
                delay: 20000,
            },
        ],
    },
};
