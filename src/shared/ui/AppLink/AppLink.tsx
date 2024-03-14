import { memo } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

export type TAppLinkProps = NavLinkProps & {
    className?: string;
    theme?: AppLinkTheme;
    dataTestId?: string;
};

export const AppLink = memo((props: TAppLinkProps) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, dataTestId, ...otherProps } = props;

    return (
        <NavLink
            {...otherProps}
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [cls.AppLinkIsActive]: isActive }, [className, cls[theme]])
            }
            data-testid={dataTestId}
        >
            {children}
        </NavLink>
    );
});
