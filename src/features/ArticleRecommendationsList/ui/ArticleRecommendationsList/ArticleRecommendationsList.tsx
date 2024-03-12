import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList, ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';

import cls from './ArticleRecomendatonsList.module.scss';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

    if (isLoading || error) {
        return null;
    }

    return (
        <VStack gap="8" className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
            <Text size={TextSize.L} title={t('Рекомендуем')} />
            <ArticleList
                view={ArticleView.SMALL}
                isVirtualized={false}
                articles={articles}
                isLoading={isLoading}
                target="_blank"
                className={cls.list}
            />
        </VStack>
    );
});
