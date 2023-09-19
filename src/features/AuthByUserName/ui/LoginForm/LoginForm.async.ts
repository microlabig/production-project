import { FC, lazy } from 'react';
import { TLoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<TLoginFormProps>>(
    () =>
        new Promise(resolve => {
            // имитация задержки, сделано для проекта
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                resolve(import('./LoginForm'));
            }, 1500);
        })
);
