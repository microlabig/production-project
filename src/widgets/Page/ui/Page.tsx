import { MutableRefObject, ReactNode, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { scrollRestorationActions } from '@/features/ScrollRestoration';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { TestProps } from '@/shared/types/tests';

import cls from './Page.module.scss';

type TPageProps = TestProps & {
    children: ReactNode;
    onScrollEnd?: () => void;

    className?: string;
};

export const Page = (props: TPageProps) => {
    const dispatch = useAppDispatch();
    const { className, children, onScrollEnd } = props;
    const location = useLocation();

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const scrollPosition = useSelector((state: StateSchema) => state.scrollRestoration.scroll[location.pathname]);

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const handleScroll = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollRestorationActions.setScrollPosition({ path: location.pathname, position: e.currentTarget.scrollTop })
        );
    }, 500);

    const baseClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.PageRedesigned,
        off: () => cls.Page,
    });

    return (
        <main
            ref={wrapperRef}
            onScroll={handleScroll}
            className={classNames(baseClass, {}, [className])}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
        </main>
    );
};
