import { memo } from 'react';

import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

type TViewSelectorContainerProps = {
    className?: string;
};

export const ViewSelectorContainer = memo((props: TViewSelectorContainerProps) => {
    const { className } = props;

    const { view, handleChangeView } = useArticleFilters();

    return <ArticleViewSelector view={view} onViewClick={handleChangeView} className={className} />;
});
