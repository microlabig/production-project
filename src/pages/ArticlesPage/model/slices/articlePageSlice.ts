import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { SortOrder } from '@/shared/types';
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
        entities: {},
        hasMore: true,
        page: 1,
        view: ArticleView.BIG,
        order: 'asc',
        sort: ArticleSortField.CREATED,
        search: '',
        type: ArticleType.ALL,
        _inited: false,
    }),
    reducers: {
        initState: state => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleView;

            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
    },
    extraReducers: builder => {
        // Get
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;

                if (action.meta.arg.replace) {
                    // replace берется из аргументов, переданных в fetchArticlesList
                    articlePageAdapter.removeAll(state); // removeAll - очищает весь массив
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= (state.limit ?? 0);

                if (action.meta.arg.replace) {
                    // replace берется из аргументов, переданных в fetchArticlesList
                    articlePageAdapter.setAll(state, action.payload); // setAll - заменяет все
                } else {
                    articlePageAdapter.addMany(state, action.payload); // addMany - добавляем в конец
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlePageSlice;
