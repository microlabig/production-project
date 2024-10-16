import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import cls from './ArticlesPageFilters.module.scss';

type TArticlesPageFiltersProps = {
    className?: string;
};

export const ArticlesPageFilters = memo((props: TArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const {
        view,
        order,
        sort,
        search,
        type,
        handleChangeView,
        handleChangeOrder,
        handleChangeSort,
        handleChangeTab,
        handleChangeSearch,
    } = useArticleFilters();

    return (
        <VStack max gap="16" className={classNames('', {}, [className])}>
            <HStack max gap="8" align="start" justify="between">
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={handleChangeOrder}
                    onChangeSort={handleChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={handleChangeView} />
            </HStack>
            <Card className={cls.search}>
                <Input placeholder={t('Поиск')} value={search} onChange={handleChangeSearch} />
            </Card>
            <ArticleTypeTabs onChange={handleChangeTab} value={type} className={cls.tabs} />
        </VStack>
    );
});
