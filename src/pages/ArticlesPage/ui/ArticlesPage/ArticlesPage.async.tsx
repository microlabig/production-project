import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
    () => import('./ArticlesPage')
    // new Promise(resolve => {
    //     // имитация задержки, сделано для проекта
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     setTimeout(() => {
    //         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //         // @ts-ignore
    //         resolve(import('./ArticlesPage'));
    //     }, 400);
    // })
);
