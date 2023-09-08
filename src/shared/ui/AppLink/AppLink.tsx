import { type FC } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

type TAppLinkProps = NavLinkProps & {
    className?: string;
    theme?: AppLinkTheme;
};

export const AppLink: FC<TAppLinkProps> = props => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <NavLink
            {...otherProps}
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [cls.AppLinkIsActive]: isActive }, [className, cls[theme]])
            }
        >
            {children}
        </NavLink>
    );
};
