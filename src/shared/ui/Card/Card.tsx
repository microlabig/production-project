import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

type TCardProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;

    className?: string;
};

export const Card = memo((props: TCardProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
});
