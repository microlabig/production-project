import { HTMLAttributeAnchorTarget, forwardRef, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Components, Virtuoso, VirtuosoGrid } from 'react-virtuoso';

import { ARTICLE_INDEX_SESSION_STORAGE_KEY } from '@/shared/constants/sessionStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';

import cls from './ArticleList.module.scss';

import { ArticleView } from '../../model/constants/constants';
import { Article } from '../../model/types/articleDetails';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, i) => <ArticleListItemSkeleton key={i} view={view} className={cls.ArticleItemSkeleton} />);
};

// Virtuoso custom styles docs: https://virtuoso.dev/customize-structure/
const ListBig: Components['List'] = forwardRef((props, ref) => <div className={cls.listBig} {...props} ref={ref} />);
const ListItemBig: Components['Item'] = props => <div className={cls.listItemBig} {...props} />;

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

    // индекс элемента, до которого можно проскроллить при возврате на данный список
    const [scrollIndex] = useState(Number(sessionStorage.getItem(ARTICLE_INDEX_SESSION_STORAGE_KEY)) || 0);

    // футер отображения скелетонов во время загрузки
    const Footer = useCallback(
        () => (isLoading ? <div className={classNames(cls.footer, {}, [cls[view]])}>{getSkeletons(view)}</div> : null),
        [isLoading, view]
    );

    // элемент во время прокрутки списка в случае view === SMALL
    const ItemContainerComponent = useCallback(
        (opt: { height: number; width: number; index: number }) => (
            <ArticleListItemSkeleton key={opt.index} view={view} className={cls.ArticleItemSkeleton} />
        ),
        [view]
    );

    const renderArticles = useCallback(
        (index: number) => {
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
        },
        [articles, target, view]
    );

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
                totalCount={articles?.length}
                itemContent={renderArticles}
                endReached={onLoadNextPart}
                components={{
                    Footer,
                    List: ListBig,
                    Item: ListItemBig,
                }}
                initialTopMostItemIndex={articles && scrollIndex > articles.length ? 0 : scrollIndex}
                className={cls.VirtuosoBig}
            />
        ) : (
            <VirtuosoGrid
                totalCount={articles?.length}
                components={{
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
                listClassName={cls.listSmall}
                className={cls.VirtuosoGrid}
            />
        );

    const renderSmallList = <HStack gap="16">{articles?.map((_, index) => renderArticles(index))}</HStack>;

    return isVirtualized ? renderVirtuosoInfiniteScrollList : renderSmallList;
});
