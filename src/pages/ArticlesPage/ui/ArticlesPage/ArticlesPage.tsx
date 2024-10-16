import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ArticlePageGreeting } from '@/features/ArticlePageGreeting';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';
import { getArticlesPageError } from '../../model/selectors/articlePageSelectors';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlePageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';

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

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    content={
                        <Page
                            /* onScrollEnd={handleLoadNextPart} */ data-testid="ArticlesPage"
                            className={classNames('', {}, [className])}
                        >
                            <VStack max className={cls.listWrapperRedesigned}>
                                <ArticleInfiniteList />
                            </VStack>
                        </Page>
                    }
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                />
            }
            off={
                <Page
                    /* onScrollEnd={handleLoadNextPart} */ data-testid="ArticlesPage"
                    className={classNames('', {}, [className])}
                >
                    <VStack max className={cls.listWrapper}>
                        <ArticlesPageFilters />
                        <ArticleInfiniteList />
                        <ArticlePageGreeting />
                    </VStack>
                </Page>
            }
        />
    );

    if (error) {
        <Page className={classNames('', {}, [className])}>{t('Ошибка загрузки статей')}</Page>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
});

export default memo(ArticlesPage);
