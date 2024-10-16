import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../testing';

export function useArticleFilters() {
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const handleChangeView = useCallback(
        (newView: ArticleView) => {
            dispatch(articlesPageActions.setView(newView));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    const handleChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlesPageActions.setOrder(newOrder));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    const handleChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(newSort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    const handleChangeSearch = useCallback(
        (value: string) => {
            dispatch(articlesPageActions.setSearch(value));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData]
    );

    const handleChangeTab = useCallback(
        (newTab: ArticleType) => {
            dispatch(articlesPageActions.setType(newTab));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    return {
        view,
        order,
        sort,
        search,
        type,
        handleChangeView,
        handleChangeOrder,
        handleChangeSort,
        handleChangeSearch,
        handleChangeTab,
    };
}
