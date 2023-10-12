import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'shared/providers/store-provider';
import { Article } from '../../types/articleDetails';

export const fetchArticleDetailsById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleDetailsById',
    async (articleId: string, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
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
