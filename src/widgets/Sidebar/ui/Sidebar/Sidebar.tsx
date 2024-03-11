import { memo, useState } from 'react';

import { useSelector } from 'react-redux';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { SIDEBAR_COLLAPSED_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';

import cls from './Sidebar.module.scss';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface TSidebarProps {
    className?: string;
}

const sidebarCollapsed = localStorage.getItem(SIDEBAR_COLLAPSED_LOCAL_STORAGE_KEY) === 'true';

export const Sidebar = memo((props: TSidebarProps) => {
    const [collapsed, setCollapsed] = useState(sidebarCollapsed);

    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        const newCollapsed = !collapsed;

        setCollapsed(newCollapsed);
        localStorage.setItem(SIDEBAR_COLLAPSED_LOCAL_STORAGE_KEY, JSON.stringify(newCollapsed));
    };

    return (
        <section
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [props.className])}
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
        </section>
    );
});
