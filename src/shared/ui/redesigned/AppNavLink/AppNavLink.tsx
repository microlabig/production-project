import { memo, ReactNode } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppNavLink.module.scss';

export type AppNavLinkVariant = 'primary' | 'red';

type TAppNavLinkProps = NavLinkProps & {
    className?: string;
    activeClassName?: string;
    variant?: AppNavLinkVariant;
    children?: ReactNode;
};

export const AppNavLink = memo((props: TAppNavLinkProps) => {
    const { to, className, activeClassName, children, variant = 'primary', ...otherProps } = props;

    return (
        <NavLink
            {...otherProps}
            to={to}
            className={({ isActive }) =>
                classNames('', { [activeClassName || cls.AppNavLinkIsActive]: isActive }, [className, cls[variant]])
            }
        >
            {children}
        </NavLink>
    );
});
