import { classNames } from 'shared/lib/classNames/classNames';

import { CSSProperties, memo, useMemo } from 'react';
import cls from './Avatar.module.scss';

type TAvatarProps = {
    src?: string;
    size?: number;
    alt?: string;

    className?: string;
};

export const Avatar = memo((props: TAvatarProps) => {
    const { src, className, size, alt } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size]
    );

    return <img src={src} style={styles} className={classNames(cls.Avatar, {}, [className])} alt={alt} />;
});
