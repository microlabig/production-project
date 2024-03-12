import { memo } from 'react';

export const typedMemo: <T>(c: T) => T = memo; // для оборачивания в memo дженерик-компонентов

export const DEBOUNCED_DELAY = 300; // ms
export const DEFAULT_USER_AVATAR = 'https://placehold.co/24x24';
