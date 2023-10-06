import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';
import { StateSchema } from 'shared/providers/store-provider';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlePageSchema } from '../types/articlePageSchema';

// Normalizing: https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
// createEntityAdapter + CRUD Functions: https://redux-toolkit.js.org/api/createEntityAdapter
const articlePageAdapter = createEntityAdapter<Article>({
    selectId: article => article.id,
});

export const getArticles = articlePageAdapter.getSelectors<StateSchema>(
    state => state.articlesPage || articlePageAdapter.getInitialState()
);

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlePageAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        view: ArticleView.BIG,
        entities: {},
        hasMore: true,
        page: 1,
    }),
    reducers: {
        initState: state => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleView;

            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
        },
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: builder => {
        // Get
        builder
            .addCase(fetchArticlesList.pending, state => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlePageAdapter.addMany(state, action.payload); // addMany - добавляем в конец
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlePageSlice;
