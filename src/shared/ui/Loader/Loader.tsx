import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import './Loader.scss';

type TLoaderProps = {
    className?: string;
};

function Loader(props: TLoaderProps) {
    return (
        <div className={classNames('lds-ellipsis', {}, [props.className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}

export default Loader;