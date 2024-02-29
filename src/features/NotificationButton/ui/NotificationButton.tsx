import { memo } from 'react';

import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
// import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

type TNotificationButtonProps = {
    className?: string;
};

export const NotificationButton = memo((props: TNotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            trigger={
                // <Button theme={ButtonTheme.CLEAR}>
                //     <Icon Svg={NotificationIcon} inverted />
                // </Button>
                <Icon Svg={NotificationIcon} inverted />
            }
            direction="bottom left"
            className={classNames(cls.NotificationButton, {}, [className])}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
