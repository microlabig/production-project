import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type TIconProps = {
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    inverted?: boolean;

    className?: string;
};

export const Icon = memo((props: TIconProps) => {
    const { Svg, inverted, className } = props;

    return <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />;
});
