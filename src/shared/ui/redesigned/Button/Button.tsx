import { type ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'outline';

type ButtonSize = 'm' | 'l' | 'xl';

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    fullWidth?: boolean;
    children?: ReactNode;
};

export const Button = memo((props: TButtonProps) => {
    const { className, children, variant = 'outline', square, size = 'm', disabled, fullWidth, ...otherProps } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            {...otherProps}
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
        >
            {children}
        </button>
    );
});
