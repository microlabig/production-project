import { FC, lazy } from 'react';
import { TAddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<TAddCommentFormProps>>(
    () =>
        new Promise(resolve => {
            // имитация задержки, сделано для проекта
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                resolve(import('./AddCommentForm'));
            }, 1500);
        })
);
