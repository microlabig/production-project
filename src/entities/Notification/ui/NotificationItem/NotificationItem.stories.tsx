import type { Meta, StoryObj } from '@storybook/react';

import { Notification } from '../../model/types/notificationSchema';

import { NotificationItem } from './NotificationItem';

const meta = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const item: Notification = {
    id: '2',
    title: 'Уведомление 2',
    description: 'Произошло какое-то событие',
    href: 'http://localhost:3000/admin',
};

export const Normal: Story = {
    args: {
        item,
    },
};
