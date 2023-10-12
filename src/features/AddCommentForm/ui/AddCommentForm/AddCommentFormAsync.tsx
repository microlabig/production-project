import { FC, lazy } from 'react';
import { TAddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<TAddCommentFormProps>>(() => import('./AddCommentForm'));
