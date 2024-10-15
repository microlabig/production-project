import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type TIconProps = React.SVGProps<SVGSVGElement> & {
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    inverted?: boolean;

    className?: string;
};

/**
 * Устарел, используем новые компоненты из директории redesigned
 * @deprecated
 */
export const Icon = memo((props: TIconProps) => {
    const { Svg, inverted, className, ...otherProps } = props;

    return <Svg {...otherProps} className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />;
});
