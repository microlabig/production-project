import { ReactNode, memo } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppNavLink.module.scss';

export enum AppNavLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

type TAppNavLinkProps = NavLinkProps & {
    className?: string;
    theme?: AppNavLinkTheme;
    children?: ReactNode;
};

export const AppNavLink = memo((props: TAppNavLinkProps) => {
    const { to, className, children, theme = AppNavLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <NavLink
            {...otherProps}
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppNavLink, { [cls.AppNavLinkIsActive]: isActive }, [className, cls[theme]])
            }
        >
            {children}
        </NavLink>
    );
});
