import './Loader.scss';

import React from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

type TLoaderProps = {
    className?: string;
};

/**
 * Устарел, используем новые компоненты из директории redesigned
 * @deprecated
 */
export function Loader(props: TLoaderProps) {
    return (
        <div className={classNames('lds-ellipsis', {}, [props.className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}
