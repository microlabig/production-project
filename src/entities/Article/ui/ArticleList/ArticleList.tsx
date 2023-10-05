import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/articleDetails';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, i) => <ArticleListItemSkeleton key={i} view={view} />);
};

type TArticleListProps = {
    articles?: Article[];
    isLoading?: boolean;
    view?: ArticleView;

    className?: string;
};

export const ArticleList = memo((props: TArticleListProps) => {
    const { className, articles, isLoading, view = ArticleView.SMALL } = props;

    const renderArticles = (article: Article) => {
        return <ArticleListItem key={article.id} article={article} view={view} />;
    };

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {!!articles?.length ? articles.map(renderArticles) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
