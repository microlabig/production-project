import { useTranslation } from 'react-i18next';

import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { Currency } from '../model/types/currency';

type TCurrencyProps = {
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;

    className?: string;
};

const options: SelectOption[] = Object.keys(Currency).map(item => ({
    value: item,
    content: item,
}));

export const CurrencySelect = memo((props: TCurrencyProps) => {
    const { t } = useTranslation();
    const { className, value, onChange, readonly } = props;

    const handleChange = useCallback(
        (val: string) => {
            onChange?.(val as Currency);
        },
        [onChange]
    );

    return (
        <Select
            label={t('Укажите валюту')}
            value={value}
            onChange={handleChange}
            options={options}
            readonly={readonly}
            className={classNames('', {}, [className])}
        />
    );
});
