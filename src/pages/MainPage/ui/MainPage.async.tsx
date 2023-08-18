import { lazy } from 'react';

export const MainPageAsync = lazy(
    () =>
        new Promise(resolve => {
            // имитация задержки, сделано для проекта
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                resolve(import('./MainPage'));
            }, 1500);
        })
);
