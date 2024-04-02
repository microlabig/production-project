import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { Counter } from '@/entities/Counter';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

type TArticleDetailsPageProps = {
    className?: string;
};

const CounterRedesigned = () => <div>123</div>;

const ArticleDetailsPage = (props: TArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
    // const isCounterEnabled = getFeatureFlag('isCounterEnabled');

    if (!id) {
        return null;
    }

    const counter = toggleFeatures({
        name: 'isCounterEnabled',
        on: () => <CounterRedesigned />,
        off: () => <Counter />,
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />

                    {counter}

                    {isArticleRatingEnabled && <ArticleRating id={id} />}
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
