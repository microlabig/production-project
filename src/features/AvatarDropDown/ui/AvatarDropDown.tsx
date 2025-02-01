import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { getRouteAdmin, getRouteProfile, getRouteSettings } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated, DropdownItem } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

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
                      href: getRouteAdmin(),
                  },
              ]
            : []),
        {
            content: t('Настройки'),
            href: getRouteSettings(),
        },
        {
            content: t('Профиль'),
            href: getRouteProfile(authData?.id ?? ''),
        },
        {
            content: t('Выйти'),
            onClick: handleLogout,
        },
    ];

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    direction="bottom left"
                    className={classNames('', {}, [className])}
                    items={items}
                    trigger={<Avatar size={40} src={authData.avatar} />}
                />
            }
            off={
                <DropdownDeprecated
                    direction="bottom left"
                    className={classNames('', {}, [className])}
                    items={items}
                    trigger={<AvatarDeprecated fallbackInverted size={30} src={authData.avatar} />}
                />
            }
        />
    );
});
