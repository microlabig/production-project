import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { Currency } from '../model/types/currency';

type TCurrencyProps = {
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;

    className?: string;
};

const options: SelectOption<Currency>[] = Object.keys(Currency).map(item => ({
    value: item as Currency,
    content: item,
}));

export const CurrencySelect = memo((props: TCurrencyProps) => {
    const { t } = useTranslation();
    const { className, value, onChange, readonly } = props;

    return (
        <Select
            label={t('Укажите валюту')}
            value={value}
            onChange={onChange}
            options={options}
            readonly={readonly}
            className={classNames('', {}, [className])}
        />
    );
});
