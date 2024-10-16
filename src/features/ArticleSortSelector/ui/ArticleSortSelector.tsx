import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleSortSelector.module.scss';

type TArticleSortSelectorProps = {
    sort: ArticleSortField;
    order: SortOrder;

    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;

    className?: string;
};

export const ArticleSortSelector = memo((props: TArticleSortSelectorProps) => {
    const { t } = useTranslation('article');
    const { className, sort, order, onChangeOrder, onChangeSort } = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t]
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t]
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div className={classNames(cls.ArticleSortSelectorRedesigned, {}, [className])}>
                    <VStack gap="8">
                        <Text text={t('Сортировать по:')} />
                        <ListBox items={sortFieldOptions} value={sort} onChange={onChangeSort} />
                        <ListBox items={orderOptions} value={order} onChange={onChangeOrder} />
                    </VStack>
                </div>
            }
            off={
                <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
                    <Select
                        label={t('Сортировать ПО')}
                        options={sortFieldOptions}
                        value={sort}
                        onChange={onChangeSort}
                    />
                    <Select label={t('по')} options={orderOptions} value={order} onChange={onChangeOrder} />
                </div>
            }
        />
    );
});
