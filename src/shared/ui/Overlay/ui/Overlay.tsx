import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

interface OverlayProps {
    onClick?: () => void;
    className?: string;
}

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    return <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />;
});
