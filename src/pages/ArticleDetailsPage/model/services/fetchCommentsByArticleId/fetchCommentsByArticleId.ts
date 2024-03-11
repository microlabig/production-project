import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId: string, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        if (!articleId) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<Comment[]>(`/comments`, {
                params: {
                    articleId,
                    _expand: 'user', // https://github.com/typicode/json-server#relationships
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
