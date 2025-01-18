import { HTMLAttributeAnchorTarget } from 'react';

import { ArticleView } from '../constants/constants';

import { Article } from './articleDetails';

export type TArticleListItemProps = {
    target?: HTMLAttributeAnchorTarget;
    article: Article;
    view: ArticleView;
    index?: number;

    className?: string;
};
