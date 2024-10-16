import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';

const mapPaddingToClass: Record<CardPadding, string> = {
    0: cls.padding0,
    8: cls.padding8,
    16: cls.padding16,
    24: cls.padding24,
};

type TCardProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;

    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;

    className?: string;
};

export const Card = memo((props: TCardProps) => {
    const { className, children, variant = 'normal', max, padding = '8', ...otherProps } = props;

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div
            className={classNames(cls.Card, mods, [className, cls[variant], mapPaddingToClass[padding]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
