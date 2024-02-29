import { ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from 'shared/providers/theme-provider';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal/Portal';
import cls from './Drawer.module.scss';

type TDrawerProps = {
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;

    className?: string;
};

export const Drawer = memo((props: TDrawerProps) => {
    const { className, children, isOpen, onClose } = props;
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
});
