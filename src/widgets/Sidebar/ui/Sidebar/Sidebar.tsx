import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import { AppNavLink, AppNavLinkTheme } from 'shared/ui/AppNavLink/AppNavLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import cls from './Sidebar.module.scss';

interface TSidebarProps {
    className?: string;
}

export const Sidebar: FC<TSidebarProps> = props => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
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

            <div className={cls.items}>
                <AppNavLink theme={AppNavLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Главная')}</span>
                </AppNavLink>
                <AppNavLink theme={AppNavLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('О странице')}</span>
                </AppNavLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
