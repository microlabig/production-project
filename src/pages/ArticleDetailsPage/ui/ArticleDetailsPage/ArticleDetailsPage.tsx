import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleDetails } from 'entities/Article';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

type TArticleDetailsPageProps = {
    className?: string;
};

const ArticleDetailsPage = (props: TArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    console.log(id);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
