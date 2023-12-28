import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleSortField, ArticleSortSelector, ArticleType, ArticleTypeTabs, ArticleView } from 'entities/Article';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from 'shared/types';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slices/articlePageSlice';
import cls from './ArticlesPageFilters.module.scss';

type TArticlesPageFiltersProps = {
    className?: string;
};

export const ArticlesPageFilters = memo((props: TArticlesPageFiltersProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const { className } = props;

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

    return (
        <VStack max gap="16" className={classNames('', {}, [className])}>
            <HStack max gap="8" align="start" justify="between">
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={handleChangeOrder}
                    onChangeSort={handleChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={handleChangeView} />
            </HStack>
            <Card className={cls.search}>
                <Input placeholder={t('Поиск')} value={search} onChange={handleChangeSearch} />
            </Card>
            <ArticleTypeTabs onChange={handleChangeTab} value={type} className={cls.tabs} />
        </VStack>
    );
});
