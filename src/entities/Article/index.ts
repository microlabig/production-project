export { ArticleList } from './ui/ArticleList/ArticleList';

export { getArticleDetailsData } from './model/selectors/articleDetails';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export { Article, ArticleView } from './model/types/articleDetails';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { articleDetailsReducer, articleDetailsActions } from './model/slice/articleDetailsSlice';
