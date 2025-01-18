import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated, ListBoxItem } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
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

    const listBoxProps = {
        label: t('Укажите страну'),
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
