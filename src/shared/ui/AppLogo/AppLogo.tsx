import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';

import AppSvg from '@/shared/assets/icons/app-image.svg';

import cls from './AppLogo.module.scss';

type TAppLogoProps = {
    className?: string;
};

export const AppLogo = memo((props: TAppLogoProps) => {
    const { className } = props;

    return (
        <HStack max justify="center" className={classNames(cls.appLogoWrapper, {}, [className])}>
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg className={cls.appLogo} />
        </HStack>
    );
});
