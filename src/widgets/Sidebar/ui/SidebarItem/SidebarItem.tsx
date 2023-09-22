import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppNavLink, AppNavLinkTheme } from 'shared/ui/AppNavLink/AppNavLink';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

type TSidebarItemProps = {
    item: SidebarItemType;
    collapsed?: boolean;
};

export const SidebarItem = memo((props: TSidebarItemProps) => {
    const { t } = useTranslation();
    const { item, collapsed } = props;

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
