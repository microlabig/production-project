import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    ProfileCard,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    profileReducer,
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

function ProfilePage() {
    const dispatch = useAppDispatch();

    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

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
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames('', {}, [])}>
                <ProfilePageHeader readonly={readonly} />
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
            </div>
        </DynamicModuleLoader>
    );
}

export default memo(ProfilePage);
