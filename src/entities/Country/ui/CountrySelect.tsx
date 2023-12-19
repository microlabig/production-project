import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import { ListBox, ListBoxItem } from 'shared/ui/ListBox/ListBox';
import { Country } from '../model/types/country';

type TCurrencyProps = {
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;

    className?: string;
};

const options: ListBoxItem<Country>[] = Object.keys(Country).map(item => ({
    value: item as Country,
    content: item,
}));

export const CountrySelect = memo((props: TCurrencyProps) => {
    const { t } = useTranslation();
    const { className, value, onChange, readonly } = props;

    return (
        <ListBox
            label={t('Укажите страну')}
            value={value}
            items={options}
            onChange={onChange}
            readonly={readonly}
            className={className}
            direction="top"
        />
    );
});
