import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

import cls from './NotificationItem.module.scss';

import { Notification } from '../../model/types/notificationSchema';

type TNotificationItemProps = {
    item: Notification;

    className?: string;
};

export const NotificationItem = memo((props: TNotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card theme={CardTheme.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a className={cls.link} target="_blank" href={item.href} rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
