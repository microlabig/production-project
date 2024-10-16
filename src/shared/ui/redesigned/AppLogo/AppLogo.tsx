import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '../Icon';
import { HStack } from '../Stack';

import AppSvg from '@/shared/assets/icons/app-image.svg';

import cls from './AppLogo.module.scss';

type TAppLogoProps = {
    className?: string;
    size?: number;
};

export const AppLogo = memo((props: TAppLogoProps) => {
    const { className, size = 50 } = props;

    return (
        <HStack max justify="center" className={classNames(cls.appLogoWrapper, {}, [className])}>
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <Icon Svg={AppSvg} className={cls.appLogo} width={size} height={size} color="black" />
        </HStack>
    );
});
