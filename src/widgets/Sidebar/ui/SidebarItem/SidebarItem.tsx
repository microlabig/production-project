import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppNavLink, AppNavLinkTheme } from '@/shared/ui/AppNavLink';

import cls from './SidebarItem.module.scss';

import { SidebarItemType } from '../../model/types/sidebar';

type TSidebarItemProps = {
    item: SidebarItemType;
    collapsed?: boolean;
};

export const SidebarItem = memo((props: TSidebarItemProps) => {
    const { t } = useTranslation();
    const { item, collapsed } = props;

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppNavLink
            theme={AppNavLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppNavLink>
    );
});
