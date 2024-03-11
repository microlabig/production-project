import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ListBox, ListBoxItem } from '@/shared/ui/Popups';

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

    return (
        <ListBox
            label={t('Укажите валюту')}
            value={value}
            items={options}
            onChange={onChange}
            readonly={readonly}
            className={className}
            direction="top right"
        />
    );
});
