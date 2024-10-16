import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { SIDEBAR_COLLAPSED_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

import cls from './Sidebar.module.scss';

interface TSidebarProps {
    className?: string;
}

const sidebarCollapsed = localStorage.getItem(SIDEBAR_COLLAPSED_LOCAL_STORAGE_KEY) === 'true';

export const Sidebar = memo((props: TSidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(sidebarCollapsed);

    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        const newCollapsed = !collapsed;

        setCollapsed(newCollapsed);
        localStorage.setItem(SIDEBAR_COLLAPSED_LOCAL_STORAGE_KEY, JSON.stringify(newCollapsed));
    };

    const itemsList = useMemo(
        () => sidebarItemsList.map(item => <SidebarItem item={item} collapsed={collapsed} key={item.path} />),
        [collapsed, sidebarItemsList]
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(cls.SidebarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [className])}
                >
                    <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
                    <VStack role="navigation" gap="8" className={cls.items}>
                        {itemsList}
                    </VStack>
                    <Icon
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        Svg={ArrowIcon}
                        clickable
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </div>
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
                >
                    <Button
                        data-testid="sidebar-toggle"
                        type="button"
                        onClick={onToggle}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        square
                        size={ButtonSize.L}
                        className={cls.collapseBtn}
                    >
                        {collapsed ? '>' : '<'}
                    </Button>

                    <VStack role="navigation" gap="8" className={cls.items}>
                        {sidebarItemsList.map(item => (
                            <SidebarItem key={item.path} item={item} collapsed={collapsed} />
                        ))}
                    </VStack>

                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} />
                    </div>
                </aside>
            }
        />
    );
});
