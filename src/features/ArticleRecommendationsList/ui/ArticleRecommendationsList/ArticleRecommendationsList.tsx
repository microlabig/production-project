import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList, ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

import cls from './ArticleRecomendatonsList.module.scss';

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
        <VStack
            gap="8"
            className={classNames(cls.ArticleRecommendationsList, {}, [className])}
            data-testid="ArticleRecommendationsList"
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Text size="l" title={t('Рекомендуем')} />}
                off={<TextDeprecated size={TextSize.L} title={t('Рекомендуем')} />}
            />
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
