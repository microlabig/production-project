import { classNames } from 'shared/lib/classNames/classNames';
import { AppNavLink, AppNavLinkTheme } from 'shared/ui/AppNavLink/AppNavLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface TNavbarProps {
    className?: string;
}

export function Navbar(props: TNavbarProps) {
    const { t } = useTranslation();

    return (
        <header className={classNames(cls.navbar, {}, [props.className])}>
            <nav className={cls.links}>
                <AppNavLink theme={AppNavLinkTheme.PRIMARY} to="/" className={cls.mainLink}>
                    {t('Главная')}
                </AppNavLink>
                <AppNavLink theme={AppNavLinkTheme.SECONDARY} to="/about">
                    {t('О странице')}
                </AppNavLink>
            </nav>
        </header>
    );
}
