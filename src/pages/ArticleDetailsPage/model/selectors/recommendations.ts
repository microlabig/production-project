import { StateSchema } from '@/shared/providers/store-provider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.isLoading ?? false;
export const getArticleRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error;
