import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import { ThunkConfig } from '@/shared/providers/store-provider';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articlePageSelectors';

interface FetchArticlesListParams {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListParams, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (params, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const state = getState();

        const page = getArticlesPageNum(state);
        const limit = getArticlesPageLimit(state);
        const sort = getArticlesPageSort(state);
        const order = getArticlesPageOrder(state);
        const search = getArticlesPageSearch(state);
        const type = getArticlesPageType(state);

        try {
            addQueryParams({
                sort,
                order,
                search,
                type,
            });
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user', // https://github.com/typicode/json-server#relationships
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
