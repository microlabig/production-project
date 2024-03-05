import { StateSchema } from '@/shared/providers/store-provider';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.comments?.isLoading ?? false;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
