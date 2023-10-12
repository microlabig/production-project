import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/articleDetails';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, i) => <ArticleListItemSkeleton key={i} view={view} />);
};

type TArticleListProps = {
    target?: HTMLAttributeAnchorTarget;
    articles?: Article[];
    isLoading?: boolean;
    view?: ArticleView;

    className?: string;
};

export const ArticleList = memo((props: TArticleListProps) => {
    const { t } = useTranslation('article');
    const { className, articles, isLoading, view = ArticleView.SMALL, target } = props;

    const renderArticles = (article: Article) => {
        return <ArticleListItem key={article.id} article={article} view={view} target={target} />;
    };

    if (!isLoading && !articles?.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} text={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {!!articles?.length ? articles.map(renderArticles) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
