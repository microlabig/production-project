import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

import { getArticlesPageInited } from '../../selectors/articlePageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<void>>(
    'articlesPage/initArticlesPage',
    (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const state = getState();
        const inited = getArticlesPageInited(state);

        if (!inited) {
            searchParams.forEach((value, key) => {
                switch (key) {
                    case 'order':
                        dispatch(articlesPageActions.setOrder((value as SortOrder) ?? 'asc'));
                        break;

                    case 'sort':
                        dispatch(articlesPageActions.setSort((value as ArticleSortField) ?? ArticleSortField.CREATED));
                        break;

                    case 'search':
                        dispatch(articlesPageActions.setSearch((value as SortOrder) ?? ''));
                        break;

                    case 'type':
                        dispatch(articlesPageActions.setType((value as ArticleType) ?? ''));
                        break;

                    default:
                        break;
                }
            });

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    }
);
