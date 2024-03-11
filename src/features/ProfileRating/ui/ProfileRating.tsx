import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useGetProfileRating, useRateProfile } from '../api/profileRatingApi';

export type TProfileRatingProps = {
    id: string;

    className?: string;
};

const ProfileRating = memo((props: TProfileRatingProps) => {
    const { t } = useTranslation('profile');
    const { className, id } = props;

    const userData = useSelector(getUserAuthData);

    const { data, isLoading, error } = useGetProfileRating({ userId: userData?.id ?? '', profileId: id });
    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback(
        (starCount: number, feedback?: string) => {
            try {
                rateProfileMutation({ userId: userData?.id ?? '', profileId: id, rate: starCount, feedback });
            } catch (err) {
                console.error(err);
            }
        },
        [id, rateProfileMutation, userData?.id]
    );

    const handleAccept = useCallback(
        (starCount: number, feedback?: string) => {
            handleRateProfile(starCount, feedback);
        },
        [handleRateProfile]
    );

    const handleCancel = useCallback(
        (starCount: number) => {
            handleRateProfile(starCount);
        },
        [handleRateProfile]
    );

    if (error) {
        return null;
    }

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={handleAccept}
            onCancel={handleCancel}
            rate={rating?.rate}
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте свой отзыв о профиле')}
            hasFeedback
            className={className}
        />
    );
});

export default ProfileRating;
