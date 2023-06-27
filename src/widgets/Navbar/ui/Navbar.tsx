import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppNavLink, AppNavLinkTheme } from 'shared/ui/AppNavLink/AppNavLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

type TNavbarProps = {
  className?: string;
}

export function Navbar(props: TNavbarProps) {
  return (
    <header className={classNames(cls.navbar, )}>
      
      <nav className={cls.links}>
        <AppNavLink theme={AppNavLinkTheme.PRIMARY} to="/" className={cls.mainLink}>Главная</AppNavLink>
        <AppNavLink theme={AppNavLinkTheme.SECONDARY} to="/about">О странице</AppNavLink>
      </nav>
    </header>
  )
}

