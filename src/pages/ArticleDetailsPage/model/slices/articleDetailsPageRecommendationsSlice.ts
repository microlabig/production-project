import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { StateSchema } from 'shared/providers/store-provider';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations.ts';
import { ArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema';

// Normalizing: https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
// createEntityAdapter + CRUD Functions: https://redux-toolkit.js.org/api/createEntityAdapter
const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: comment => comment.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    state => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
);

const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: builder => {
        // Get
        builder
            .addCase(fetchArticleRecommendations.pending, state => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
