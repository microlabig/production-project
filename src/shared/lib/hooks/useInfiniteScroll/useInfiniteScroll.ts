import React, { useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    wrapperRef?: React.MutableRefObject<HTMLElement>;
    triggerRef: React.MutableRefObject<HTMLElement>;
    callback?: () => void;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
    useEffect(() => {
        const wrapper = wrapperRef?.current || null;
        const trigger = triggerRef.current;
        let observer: IntersectionObserver;

        if (callback) {
            const options: IntersectionObserverInit = {
                root: wrapper,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    // isIntersecting - только когда элемент появляется в зоне видимости
                    callback();
                }
            }, options);
            observer.observe(trigger);
        }

        return () => {
            if (observer && trigger) {
                observer.unobserve(trigger);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}
