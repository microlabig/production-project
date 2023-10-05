import { StateSchema } from 'shared/providers/store-provider';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text ?? '';
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error ?? undefined;
