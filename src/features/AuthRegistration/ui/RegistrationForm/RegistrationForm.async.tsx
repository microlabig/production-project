import { FC, lazy } from 'react';

import { TRegistrationFormProps } from './RegistrationForm';

export const RegistrationFormAsync = lazy<FC<TRegistrationFormProps>>(
    () =>
        new Promise(resolve => {
            // имитация задержки, сделано для проекта
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                resolve(import('./RegistrationForm'));
            }, 1500);
        })
);
