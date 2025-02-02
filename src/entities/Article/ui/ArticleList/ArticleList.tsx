import { forwardRef, HTMLAttributeAnchorTarget, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Components, Virtuoso, VirtuosoGrid } from 'react-virtuoso';

import { ARTICLE_INDEX_SESSION_STORAGE_KEY } from '@/shared/constants/sessionStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleView } from '../../model/constants/constants';
import { Article } from '../../model/types/articleDetails';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import cls from './ArticleList.module.scss';

const getSkeletons = (view: ArticleView) => {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, i) => <ArticleListItemSkeleton key={i} view={view} className={cls.ArticleItemSkeleton} />);
};

// Virtuoso custom styles docs: https://virtuoso.dev/customize-structure/
const ListBig: Components['List'] = forwardRef((props, ref) => (
    <div data-testid="ArticleList" className={cls.listBig} {...props} ref={ref} />
));
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
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text size="l" text={t('Статьи не найдены')} />}
                    off={<TextDeprecated size={TextSize.L} text={t('Статьи не найдены')} />}
                />
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
                className={toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.VirtuosoBigRedesigned,
                    off: () => cls.VirtuosoBig,
                })}
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
                className={toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.VirtuosoGridRedesigned,
                    off: () => cls.VirtuosoGrid,
                })}
            />
        );

    const renderSmallList = <HStack gap="16">{articles?.map((_, index) => renderArticles(index))}</HStack>;

    return isVirtualized ? renderVirtuosoInfiniteScrollList : renderSmallList;
});
