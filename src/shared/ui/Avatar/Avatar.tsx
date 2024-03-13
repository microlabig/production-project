import { CSSProperties, memo, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import UserFilledIcon from '@/shared/assets/icons/user-filled.svg';

import cls from './Avatar.module.scss';

type TAvatarProps = {
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;

    className?: string;
};

export const Avatar = memo((props: TAvatarProps) => {
    const { src, className, size, alt = 'avatar', fallbackInverted } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size]
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserFilledIcon} />;

    return (
        <AppImage
            src={src}
            style={styles}
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(cls.Avatar, {}, [className])}
            alt={alt}
        />
    );
});
