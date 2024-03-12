import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { RoutePath } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown, DropdownItem } from '@/shared/ui/Popups';

type TAvatarDropDownProps = {
    className?: string;
};

export const AvatarDropDown = memo((props: TAvatarDropDownProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const { className } = props;

    const authData = useSelector(getUserAuthData);

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const handleLogout = useCallback(() => dispatch(userActions.logout()), [dispatch]);

    if (!authData) {
        return null;
    }

    const items: DropdownItem[] = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Админка'),
                      href: RoutePath.admin_panel,
                  },
              ]
            : []),
        {
            content: t('Профиль'),
            href: `${RoutePath.profile}/${authData?.id ?? ''}`,
        },
        {
            content: t('Выйти'),
            onClick: handleLogout,
        },
    ];

    return (
        <Dropdown
            items={items}
            trigger={<Avatar size={30} src={authData.avatar} />}
            direction="bottom left"
            className={classNames('', {}, [className])}
        />
    );
});
