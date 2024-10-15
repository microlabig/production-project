import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppNavLink as AppNavLinkDeprecated, AppNavLinkTheme } from '@/shared/ui/deprecated/AppNavLink';
import { AppNavLink } from '@/shared/ui/redesigned/AppNavLink';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { SidebarItemType } from '../../model/types/sidebar';

import cls from './SidebarItem.module.scss';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <AppNavLink
                    to={item.path}
                    activeClassName={cls.active}
                    className={classNames(cls.itemRedesigned, { [cls.collapsedRedesigned]: collapsed })}
                >
                    <Icon Svg={item.Icon} className={cls.icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppNavLink>
            }
            off={
                <AppNavLinkDeprecated
                    theme={AppNavLinkTheme.SECONDARY}
                    to={item.path}
                    className={classNames(cls.item, { [cls.collapsed]: collapsed })}
                >
                    <item.Icon className={cls.icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppNavLinkDeprecated>
            }
        />
    );
});
