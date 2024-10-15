import { useTranslation } from 'react-i18next';

import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { Profile } from '../../model/types/profileSchema';

import cls from './ProfileCard.module.scss';

type TProfileCardProps = {
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

export const ProfileCard = (props: TProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        data,
        className,
        isLoading,
        error,
        readonly,

        handleChangeFirstName,
        handleChangeLastName,
        handleChangeAge,
        handleChangeCity,
        handleChangeUsername,
        handleChangeAvatar,
        handleChangeCurrency,
        handleChangeCountry,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="16" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack align="center" justify="center" max>
                    <Avatar src={data.avatar} />
                </HStack>
            )}
            <Input
                readonly={readonly}
                value={data?.first}
                placeholder={t('Ваше имя')}
                onChange={handleChangeFirstName}
                data-testid="ProfileCard.FirstName"
            />
            <Input
                readonly={readonly}
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                onChange={handleChangeLastName}
                data-testid="ProfileCard.LastName"
            />
            <Input readonly={readonly} value={data?.age} placeholder={t('Ваш возраст')} onChange={handleChangeAge} />
            <Input readonly={readonly} value={data?.city} placeholder={t('Город')} onChange={handleChangeCity} />
            <Input
                readonly={readonly}
                value={data?.username}
                placeholder={t('Имя пользователя')}
                onChange={handleChangeUsername}
            />
            <Input
                readonly={readonly}
                value={data?.avatar}
                placeholder={t('Ссылка на аватар')}
                onChange={handleChangeAvatar}
            />
            <CurrencySelect value={data?.currency} onChange={handleChangeCurrency} readonly={readonly} />
            <CountrySelect value={data?.country} onChange={handleChangeCountry} readonly={readonly} />
        </VStack>
    );
};
