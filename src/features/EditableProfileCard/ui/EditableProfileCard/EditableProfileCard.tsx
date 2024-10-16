import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ValidateProfileError } from '../../model/constants/constants';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

interface EditableProfileCardProps {
    id?: string;

    className?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const { className, id } = props;

    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch]
    );

    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            const validateValue = value?.replace(/\D+/g, '');

            dispatch(profileActions.updateProfile({ age: Number(validateValue) }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (value?: Country) => {
            dispatch(profileActions.updateProfile({ country: value }));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {!!validateErrors?.length &&
                    validateErrors.map(err => (
                        <Text
                            key={err}
                            data-testid="EditableProfileCard.Error"
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslates[err]}
                        />
                    ))}
                <ProfileCard
                    data={form}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    handleChangeFirstName={onChangeFirstName}
                    handleChangeLastName={onChangeLastName}
                    handleChangeAge={onChangeAge}
                    handleChangeCity={onChangeCity}
                    handleChangeUsername={onChangeUsername}
                    handleChangeAvatar={onChangeAvatar}
                    handleChangeCurrency={onChangeCurrency}
                    handleChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
