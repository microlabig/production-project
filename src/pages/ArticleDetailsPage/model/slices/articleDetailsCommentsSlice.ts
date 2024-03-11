import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';

// Normalizing: https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
// createEntityAdapter + CRUD Functions: https://redux-toolkit.js.org/api/createEntityAdapter
const commentsAdapter = createEntityAdapter<Comment>({
    selectId: comment => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    state => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: builder => {
        // Get
        builder
            .addCase(fetchCommentsByArticleId.pending, state => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                state.data = action.payload;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
