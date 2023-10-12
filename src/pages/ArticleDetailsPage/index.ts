export { articleDetailsPageReducer } from './model/slices';

export { articleDetailsCommentsReducer } from './model/slices/articleDetailsCommentsSlice';

export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
export type { ArticleDetailsCommentsSchema } from './model/types/articleDetailsCommentsSchema';

export type { ArticleDetailsPageSchema } from './model/types';
export type { ArticleDetailsRecommendationsSchema } from './model/types/articleDetailsRecommendationsSchema';
export { articleDetailsPageRecommendationsReducer } from './model/slices/articleDetailsPageRecommendationsSlice';
