import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

import SearchIcon from '@/shared/assets/icons/search.svg';

import cls from './ArticlesFilters.module.scss';

type TArticlesFiltersProps = {
    search: string;
    onChangeSearch: (search: string) => void;

    sort: ArticleSortField;
    order: SortOrder;

    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;

    type: ArticleType;
    onChangeType: (newTab: ArticleType) => void;

    className?: string;
};

export const ArticlesFilters = memo((props: TArticlesFiltersProps) => {
    const { className, search, onChangeSearch, order, sort, onChangeOrder, onChangeSort, type, onChangeType } = props;
    const { t } = useTranslation('article');

    return (
        <Card padding="24" className={classNames(cls.ArticlesFilters, {}, [className])}>
            <VStack gap="32">
                <Input
                    placeholder={t('Поиск')}
                    size="s"
                    value={search}
                    onChange={onChangeSearch}
                    addonLeft={<Icon Svg={SearchIcon} />}
                />
                <ArticleTypeTabs onChange={onChangeType} value={type} className={cls.tabs} />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    );
});
