import { memo } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

export type TAppLinkProps = NavLinkProps & {
    className?: string;
    activeClassName?: string;
    variant?: AppLinkVariant;
    dataTestId?: string;
};

export const AppLink = memo((props: TAppLinkProps) => {
    const { to, className, activeClassName, children, variant = 'primary', dataTestId, ...otherProps } = props;

    return (
        <NavLink
            {...otherProps}
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [activeClassName || cls.AppLinkIsActive]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            data-testid={dataTestId}
        >
            {children}
        </NavLink>
    );
});
