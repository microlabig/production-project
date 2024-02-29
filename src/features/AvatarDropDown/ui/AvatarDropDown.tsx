import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/constants';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popups';

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

    return (
        <Dropdown
            items={[
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
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
            direction="bottom left"
            className={classNames('', {}, [className])}
        />
    );
});
