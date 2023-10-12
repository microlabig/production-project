import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { Country } from '../model/types/country';

type TCurrencyProps = {
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;

    className?: string;
};

const options: SelectOption<Country>[] = Object.keys(Country).map(item => ({
    value: item as Country,
    content: item,
}));

export const CountrySelect = memo((props: TCurrencyProps) => {
    const { t } = useTranslation();
    const { className, value, onChange, readonly } = props;

    return (
        <Select
            label={t('Укажите страну')}
            value={value}
            onChange={onChange}
            options={options}
            readonly={readonly}
            className={classNames('', {}, [className])}
        />
    );
});
