import { FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppNavLink.module.scss";

export enum AppNavLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type TAppNavLinkProps = NavLinkProps & {
  className?: string;
  theme?: AppNavLinkTheme;
};

export const AppNavLink: FC<TAppNavLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppNavLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <NavLink
      {...otherProps}
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppNavLink, { [cls.AppNavLinkIsActive]: isActive }, [
          className,
          cls[theme],
        ])
      }
    >
      {children}
    </NavLink>
  );
};
