import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { useGetArticleRating, useRateArticle } from '../api/articleRatingApi';

export type TArticleRatingProps = {
    id: string;

    className?: string;
};

const ArticleRating = memo((props: TArticleRatingProps) => {
    const { t } = useTranslation('article');
    const { className, id } = props;

    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({ userId: userData?.id ?? '', articleId: id });
    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback(
        (starCount: number, feedback?: string) => {
            try {
                rateArticleMutation({ userId: userData?.id ?? '', articleId: id, rate: starCount, feedback });
            } catch (error) {
                console.error(error);
            }
        },
        [id, rateArticleMutation, userData?.id]
    );

    const handleAccept = useCallback(
        (starCount: number, feedback?: string) => {
            handleRateArticle(starCount, feedback);
        },
        [handleRateArticle]
    );

    const handleCancel = useCallback(
        (starCount: number) => {
            handleRateArticle(starCount);
        },
        [handleRateArticle]
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={handleAccept}
            onCancel={handleCancel}
            rate={rating?.rate}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
            className={className}
        />
    );
});

export default ArticleRating;
