import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollRestorationScroll = (state: StateSchema) => state.scrollRestoration.scroll;
export const getScrollRestorationByPath = createSelector(
    getScrollRestorationScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] ?? 0
);
