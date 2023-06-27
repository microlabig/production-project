import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  theme?: ThemeButton;
};

export const Button: FC<TButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
      {children}
    </button>
  );
};