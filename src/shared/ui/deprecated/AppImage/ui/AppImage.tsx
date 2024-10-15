import { ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react';

type TAppImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    fallback?: ReactElement;
    errorFallback?: ReactElement;

    className?: string;
};

/**
 * Устарел, используем новые компоненты из директории redesigned
 * @deprecated
 */
export const AppImage = memo((props: TAppImageProps) => {
    const { className, src, alt = 'image', fallback, errorFallback, ...otherProps } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();

        img.src = src || '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return <img {...otherProps} src={src} alt={alt} className={className} />;
});
