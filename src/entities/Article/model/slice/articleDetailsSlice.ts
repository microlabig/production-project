import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticleDetailsById } from '../services/fetchArticleDetailsById/fetchArticleDetailsById';
import { Article } from '../types/articleDetails';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // Get one
        builder
            .addCase(fetchArticleDetailsById.pending, state => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleDetailsById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleDetailsById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice;
