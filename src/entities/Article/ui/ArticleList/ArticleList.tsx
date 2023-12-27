import { HTMLAttributeAnchorTarget, memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { ARTICLE_INDEX_SESSION_STORAGE_KEY } from 'shared/constants/sessionStorage';
import { HStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/articleDetails';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, i) => <ArticleListItemSkeleton key={i} view={view} className={cls.ArticleItemSkeleton} />);
};

type TArticleListProps = {
    target?: HTMLAttributeAnchorTarget;
    articles?: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    onLoadNextPart?: () => void;

    isVirtualized?: boolean;

    className?: string;
};

export const ArticleList = memo((props: TArticleListProps) => {
    const { t } = useTranslation('article');
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        onLoadNextPart,
        isVirtualized = true,
    } = props;

    const [scrollIndex] = useState(Number(sessionStorage.getItem(ARTICLE_INDEX_SESSION_STORAGE_KEY)) || 0);

    const Header = useCallback(() => <ArticlesPageFilters />, []);
    const Footer = useCallback(
        () =>
            isLoading ? (
                <div className={classNames(cls.ArticleListSkeleton, {}, [cls[view]])}>{getSkeletons(view)}</div>
            ) : null,
        [isLoading, view]
    );
    const ItemContainerComponent = useCallback(
        (opt: { height: number; width: number; index: number }) => (
            <div className={cls.itemContainer}>
                <ArticleListItemSkeleton key={opt.index} view={view} className={cls.ArticleItemSkeleton} />
            </div>
        ),
        [view]
    );

    const renderArticles = (index: number) => {
        const article = articles?.[index];

        if (!article) {
            return null;
        }
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
                target={target}
                className={cls.ArticleListItem}
                index={index}
            />
        );
    };

    if (!isLoading && !articles?.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className])}>
                <Text size={TextSize.L} text={t('Статьи не найдены')} />
            </div>
        );
    }

    const renderVirtuosoInfiniteScrollList =
        view === ArticleView.BIG ? (
            <Virtuoso
                style={{ height: '100%' }}
                data={articles}
                itemContent={renderArticles}
                endReached={onLoadNextPart}
                components={{
                    Header,
                    Footer,
                }}
                initialTopMostItemIndex={articles && scrollIndex > articles.length ? 0 : scrollIndex}
                className={cls.Virtuoso}
            />
        ) : (
            <VirtuosoGrid
                totalCount={articles?.length}
                components={{
                    Header,
                    ScrollSeekPlaceholder: ItemContainerComponent,
                    Footer,
                }}
                data={articles}
                endReached={onLoadNextPart}
                itemContent={renderArticles}
                scrollSeekConfiguration={{
                    enter: velocity => Math.abs(velocity) > 200,
                    exit: velocity => Math.abs(velocity) < 30,
                }}
                initialTopMostItemIndex={articles && scrollIndex > articles.length ? 0 : scrollIndex}
                listClassName={cls.itemsWrapper}
                className={cls.VirtuosoGrid}
            />
        );

    const renderSmallList = <HStack gap="16">{articles?.map((_, index) => renderArticles(index))}</HStack>;

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {isVirtualized ? renderVirtuosoInfiniteScrollList : renderSmallList}
        </div>
    );
});
