import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type TIconProps = {
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

    className?: string;
};

export const Icon = memo((props: TIconProps) => {
    const { Svg, className } = props;

    return <Svg className={classNames(cls.Icon, {}, [className])} />;
});
