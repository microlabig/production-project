import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/shared/providers/store-provider';

export const getScrollRestorationScroll = (state: StateSchema) => state.scrollRestoration.scroll;
export const getScrollRestorationByPath = createSelector(
    getScrollRestorationScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] ?? 0
);
