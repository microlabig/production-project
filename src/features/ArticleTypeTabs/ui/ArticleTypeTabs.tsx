import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';

type TArticleTypeTabsProps = {
    value: ArticleType;
    onChange: (newTab: ArticleType) => void;

    className?: string;
};

export const ArticleTypeTabs = memo((props: TArticleTypeTabsProps) => {
    const { t } = useTranslation('article');
    const { className, onChange, value } = props;

    const typesTabs = useMemo<TabItem<ArticleType>[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все'),
            },
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.ECONOMIC,
                content: t('Экономика'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
        ],
        [t]
    );

    const handleChangeTab = useCallback(
        (newTab: TabItem<ArticleType>) => {
            onChange(newTab.value);
        },
        [onChange]
    );

    return (
        <Tabs
            tabs={typesTabs}
            onTabClick={handleChangeTab}
            value={value}
            className={classNames('', {}, [className])}
            dataTestId="ArticleTypeTabs"
        />
    );
});
