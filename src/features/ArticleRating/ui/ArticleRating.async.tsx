import { Suspense, lazy } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';

import { TArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: TArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={120} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
