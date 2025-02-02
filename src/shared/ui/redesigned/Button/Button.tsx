import { type ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'outline' | 'filled';
type ButtonColor = 'normal' | 'success' | 'error';

type ButtonSize = 'm' | 'l' | 'xl';

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    square?: boolean;
    size?: ButtonSize;
    fullWidth?: boolean;
    children?: ReactNode;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
};

export const Button = memo((props: TButtonProps) => {
    const {
        className,
        children,
        variant = 'outline',
        color = 'normal',
        square,
        size = 'm',
        disabled,
        fullWidth,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
        <button
            type="button"
            {...otherProps}
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size], cls[color]])}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    );
});
