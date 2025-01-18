import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Text as TextDeprecated, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { TProfileCardProps } from '../../model/types/profileCard';

import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedSkeleton = () => {
    return (
        <div className={classNames(cls.ProfileCard, {}, [cls.loading])}>
            <LoaderDeprecated />
        </div>
    );
};

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.ProfileCard, {}, [cls.error])}>
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        </div>
    );
};

export const ProfileCardDeprecated = memo((props: TProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        data,
        className,
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

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="16" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack align="center" justify="center" max>
                    <AvatarDeprecated src={data.avatar} />
                </HStack>
            )}
            <InputDeprecated
                readonly={readonly}
                value={data?.first}
                placeholder={t('Ваше имя')}
                onChange={handleChangeFirstName}
                data-testid="ProfileCard.FirstName"
            />
            <InputDeprecated
                readonly={readonly}
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                onChange={handleChangeLastName}
                data-testid="ProfileCard.LastName"
            />
            <InputDeprecated
                readonly={readonly}
                value={data?.age}
                placeholder={t('Ваш возраст')}
                onChange={handleChangeAge}
            />
            <InputDeprecated
                readonly={readonly}
                value={data?.city}
                placeholder={t('Город')}
                onChange={handleChangeCity}
            />
            <InputDeprecated
                readonly={readonly}
                value={data?.username}
                placeholder={t('Имя пользователя')}
                onChange={handleChangeUsername}
            />
            <InputDeprecated
                readonly={readonly}
                value={data?.avatar}
                placeholder={t('Ссылка на аватар')}
                onChange={handleChangeAvatar}
            />
            <CurrencySelect value={data?.currency} onChange={handleChangeCurrency} readonly={readonly} />
            <CountrySelect value={data?.country} onChange={handleChangeCountry} readonly={readonly} />
        </VStack>
    );
});
