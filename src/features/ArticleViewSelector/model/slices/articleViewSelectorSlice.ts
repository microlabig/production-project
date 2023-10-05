import { createSlice } from '@reduxjs/toolkit';
import { ArticleViewSelectorSchema } from '../types/articleViewSelectorSchema';

const initialState: ArticleViewSelectorSchema = {
    isLoading: false,
};

export const articleViewSelectorSlice = createSlice({
    name: 'articleViewSelector',
    initialState,
    reducers: {},
});

export const { actions: articleViewSelectorActions, reducer: articleViewSelectorReducer } = articleViewSelectorSlice;
