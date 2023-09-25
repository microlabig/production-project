import { useTranslation } from 'react-i18next';

import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { Country } from '../model/types/country';

type TCurrencyProps = {
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;

    className?: string;
};

const options: SelectOption[] = Object.keys(Country).map(item => ({
    value: item,
    content: item,
}));

export const CountrySelect = memo((props: TCurrencyProps) => {
    const { t } = useTranslation();
    const { className, value, onChange, readonly } = props;

    const handleChange = useCallback(
        (val: string) => {
            onChange?.(val as Country);
        },
        [onChange]
    );

    return (
        <Select
            label={t('Укажите страну')}
            value={value}
            onChange={handleChange}
            options={options}
            readonly={readonly}
            className={classNames('', {}, [className])}
        />
    );
});
