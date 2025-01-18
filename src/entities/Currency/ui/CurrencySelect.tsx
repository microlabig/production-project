import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated, ListBoxItem } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Currency } from '../model/types/currency';

type TCurrencyProps = {
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;

    className?: string;
};

const options: ListBoxItem<Currency>[] = Object.keys(Currency).map(item => ({
    value: item as Currency,
    content: item,
}));

export const CurrencySelect = memo((props: TCurrencyProps) => {
    const { t } = useTranslation();
    const { className, value, onChange, readonly } = props;

    const listBoxProps = {
        label: t('Укажите валюту'),
        value,
        items: options,
        onChange,
        readonly,
        className,
        direction: 'top right' as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...listBoxProps} />}
            off={<ListBoxDeprecated {...listBoxProps} />}
        />
    );
});
