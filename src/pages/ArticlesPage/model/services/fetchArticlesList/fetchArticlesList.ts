import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ThunkConfig } from 'shared/providers/store-provider';
import { getArticlesPageLimit } from '../../selectors/articlePageSelectors';

interface FetchArticlesListParams {
    page: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListParams, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (params, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const { page = 1 } = params;
        const state = getState();
        const limit = getArticlesPageLimit(state);

        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user', // https://github.com/typicode/json-server#relationships
                    _limit: limit,
                    _page: page,
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
