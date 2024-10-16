import { memo, ReactNode, useCallback, useEffect } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Overlay } from '../../../redesigned/Overlay';
import { Portal } from '../../../redesigned/Portal/Portal';

import cls from './Drawer.module.scss';

type TDrawerProps = {
    children: ReactNode;
    isOpen?: boolean;
    isLazy?: boolean;
    onClose?: () => void;

    className?: string;
};

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: TDrawerProps) => {
    const { className, children, isOpen, onClose } = props;
    const { theme } = useTheme();
    const { Spring, Gesture } = useAnimationLibs();

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);
    const closeDrawer = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel }) => {
            // if the user drags up passed a threshold, then we cancel
            // the drag so that the sheet resets to its open position
            if (oy < -70) {
                cancel();
            }

            // when the user releases the sheet, we check whether it passed
            // the threshold for it to close, or if we reset it to its open positino
            if (last) {
                if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    closeDrawer(vy);
                } else {
                    openDrawer();
                }
            }
            // when the user keeps dragging, we just move the sheet according to
            // the cursor position
            else {
                api.start({ y: oy, immediate: true });
            }
        },
        { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
    );

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    if (!isOpen) {
        return null;
    }

    const display = y.to(py => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}>
                <Overlay onClick={closeDrawer} />
                <Spring.a.div
                    className={cls.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

const DrawerAsync = (props: TDrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }
    return <DrawerContent {...props} />;
};

/**
 * Устарел, используем новые компоненты из директории redesigned
 * @deprecated
 */
export const Drawer = (props: TDrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...props} />
    </AnimationProvider>
);
