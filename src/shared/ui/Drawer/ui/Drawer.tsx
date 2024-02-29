import { ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { useTheme } from 'shared/providers/theme-provider';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal/Portal';
import cls from './Drawer.module.scss';

type TDrawerProps = {
    children: ReactNode;
    isOpen?: boolean;
    isLazy?: boolean;
    onClose?: () => void;

    className?: string;
};

const ANIMATION_DELAY = 300;

export const Drawer = memo((props: TDrawerProps) => {
    const { className, children, isOpen, onClose, isLazy } = props;
    const { theme } = useTheme();

    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (isLazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
});
