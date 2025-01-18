import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { Profile } from './profileSchema';

export type TProfileCardProps = {
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;

    handleChangeFirstName?: (value?: string) => void;
    handleChangeLastName?: (value?: string) => void;
    handleChangeAge?: (value?: string) => void;
    handleChangeCity?: (value?: string) => void;
    handleChangeUsername?: (value?: string) => void;
    handleChangeAvatar?: (value?: string) => void;
    handleChangeCurrency?: (value?: Currency) => void;
    handleChangeCountry?: (value?: Country) => void;

    className?: string;
};
