import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { TProfileCardProps } from '../../model/types/profileCard';
import { ProfileCardDeprecated } from '../ProfileCardDeprecated/ProfileCardDeprecated';

import cls from './ProfileCardRedesigned.module.scss';

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card padding="24" max>
            <VStack gap="32" max>
                <HStack max justify="center">
                    <Skeleton width={128} height={128} border="50%" />
                </HStack>
                <HStack max gap="32">
                    <VStack max gap="16">
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                    </VStack>
                    <VStack max gap="16">
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.ProfileCard, {}, [cls.error])}>
            <Text
                variant="error"
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align="center"
            />
        </div>
    );
};

export const ProfileCardRedesigned = memo((props: TProfileCardProps) => {
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

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card max padding="24" className={classNames(cls.ProfileCardRedesigned, {}, [className])}>
                    <VStack max gap="32">
                        {data?.avatar && (
                            <HStack align="center" justify="center" max>
                                <Avatar size={128} src={data.avatar} />
                            </HStack>
                        )}
                        <HStack gap="24" max>
                            <VStack gap="16" max>
                                <Input
                                    readonly={readonly}
                                    value={data?.first}
                                    label={t('Имя')}
                                    onChange={handleChangeFirstName}
                                    data-testid="ProfileCard.FirstName"
                                />
                                <Input
                                    readonly={readonly}
                                    value={data?.lastname}
                                    label={t('Фамилия')}
                                    onChange={handleChangeLastName}
                                    data-testid="ProfileCard.LastName"
                                />
                                <Input
                                    readonly={readonly}
                                    value={data?.age}
                                    label={t('Возраст')}
                                    onChange={handleChangeAge}
                                />
                                <Input
                                    readonly={readonly}
                                    value={data?.city}
                                    label={t('Город')}
                                    onChange={handleChangeCity}
                                />
                            </VStack>
                            <VStack gap="16" max>
                                <Input
                                    readonly={readonly}
                                    value={data?.username}
                                    label={t('Имя пользователя')}
                                    onChange={handleChangeUsername}
                                />
                                <Input
                                    readonly={readonly}
                                    value={data?.avatar}
                                    label={t('Ссылка на аватар')}
                                    onChange={handleChangeAvatar}
                                />
                                <CurrencySelect
                                    value={data?.currency}
                                    onChange={handleChangeCurrency}
                                    readonly={readonly}
                                />
                                <CountrySelect
                                    value={data?.country}
                                    onChange={handleChangeCountry}
                                    readonly={readonly}
                                />
                            </VStack>
                        </HStack>
                    </VStack>
                </Card>
            }
            off={<ProfileCardDeprecated {...props} />}
        />
    );
});
