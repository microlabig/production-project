import { ArticleView } from 'entities/Article';
import { StateSchema } from 'shared/providers/store-provider';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading ?? false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.BIG;
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page ?? 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
