import { Suspense, lazy } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';

import { TProfileRatingProps } from './ProfileRating';

const ProfileRatingLazy = lazy(() => import('./ProfileRating'));

export const ProfileRatingAsync = (props: TProfileRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={120} />}>
            <ProfileRatingLazy {...props} />
        </Suspense>
    );
};
