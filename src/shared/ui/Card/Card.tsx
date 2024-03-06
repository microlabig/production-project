import { HTMLAttributes, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

type TCardProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;

    theme?: CardTheme;
    max?: boolean;

    className?: string;
};

export const Card = memo((props: TCardProps) => {
    const { className, children, theme = CardTheme.NORMAL, max, ...otherProps } = props;

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.Card, mods, [className, cls[theme]])} {...otherProps}>
            {children}
        </div>
    );
});
