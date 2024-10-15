import React from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';

import cls from './PageLoader.module.scss';

type TPageLoaderProps = {
    className?: string;
};

export function PageLoader(props: TPageLoaderProps) {
    return (
        <div className={classNames(cls.PageLoader, {}, [props.className])}>
            <Loader />
        </div>
    );
}
