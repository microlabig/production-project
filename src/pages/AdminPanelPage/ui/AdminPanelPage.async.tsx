import { lazy } from 'react';

export const AdminPanelPageAsync = lazy(
    () => import('./AdminPanelPage')
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
