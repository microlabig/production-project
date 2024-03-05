import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { getArticlesPageError } from '../../model/selectors/articlePageSelectors';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlePageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

import cls from './ArticlesPage.module.scss';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

type TArticlesPageProps = {
    className?: string;
};

const ArticlesPage = memo((props: TArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');
    const { className } = props;

    const error = useSelector(getArticlesPageError);

    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        <Page className={classNames('', {}, [className])}>{t('Ошибка загрузки статей')}</Page>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page /* onScrollEnd={handleLoadNextPart} */ className={classNames('', {}, [className])}>
                <VStack max className={cls.listWrapper}>
                    <ArticlesPageFilters />
                    <ArticleInfiniteList />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default memo(ArticlesPage);
