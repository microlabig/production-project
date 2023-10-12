import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

type TCardProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;

    theme?: CardTheme;

    className?: string;
};

export const Card = memo((props: TCardProps) => {
    const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props;

    return (
        <div className={classNames(cls.Card, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </div>
    );
});
