import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

type TSkeletonProps = {
    height?: string | number;
    width?: string | number;
    border?: string;

    className?: string;
};

export const Skeleton = memo((props: TSkeletonProps) => {
    const { height, width, border, className } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />;
});
