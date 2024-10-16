import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

type TFiltersContainerProps = {
    className?: string;
};

export const FiltersContainer = memo((props: TFiltersContainerProps) => {
    const { className } = props;

    const { order, search, sort, type, handleChangeOrder, handleChangeSearch, handleChangeSort, handleChangeTab } =
        useArticleFilters();

    return (
        <ArticlesFilters
            search={search}
            onChangeSearch={handleChangeSearch}
            sort={sort}
            order={order}
            onChangeSort={handleChangeSort}
            onChangeOrder={handleChangeOrder}
            type={type}
            onChangeType={handleChangeTab}
            className={classNames('', {}, [className])}
        />
    );
});
