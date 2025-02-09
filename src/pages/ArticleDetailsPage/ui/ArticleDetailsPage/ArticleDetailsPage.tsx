import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

type TArticleDetailsPageProps = {
    className?: string;
};

// const CounterRedesigned = () => <div>123</div>;

const ArticleDetailsPage = (props: TArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    // const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');

    if (!id) {
        return null;
    }

    // const counter = toggleFeatures({
    //     name: 'isCounterEnabled',
    //     on: () => <CounterRedesigned />,
    //     off: () => <Counter />,
    // });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <StickyContentLayout
                        content={
                            <Page className={classNames('', {}, [className])}>
                                <VStack gap="16" max>
                                    <DetailsContainer />
                                    <ArticleRecommendationsList />
                                    <ArticleRating id={id} />
                                    <ArticleDetailsComments id={id} />
                                </VStack>
                            </Page>
                        }
                        right={<AdditionalInfoContainer />}
                    />
                }
                off={
                    <Page className={classNames('', {}, [className])}>
                        <VStack gap="16" max>
                            <ArticleDetailsPageHeader />
                            <ArticleDetails id={id} />
                            <ArticleRecommendationsList />
                            <Card>{t('Оценка статей скоро появится')}</Card>
                            <ArticleDetailsComments id={id} />
                        </VStack>
                    </Page>
                }
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
