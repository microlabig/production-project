import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './RegistrationForm.module.scss';

import { getRegistrationIsLoading } from '../../model/selectors/getRegistrationIsLoading/getRegistrationIsLoading';
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword/getRegistrationPassword';
import { getRegistrationReqPassword } from '../../model/selectors/getRegistrationReqPassword/getRegistrationReqPassword';
import { getRegistrationUsername } from '../../model/selectors/getRegistrationUsername/getRegistrationUsername';
import { registration } from '../../model/services/registration/registration';
import { registrationActions, registrationReducer } from '../../model/slices/registrationSlice';
import { RegistrationFormErrors } from '../RegistrationFormErrors/RegistrationFormErrors';

const initialReducers: ReducersList = {
    registrationForm: registrationReducer,
};

export type TRegistrationFormProps = {
    className?: string;
    onSuccess: () => void;
};

const RegistrationForm = memo((props: TRegistrationFormProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const username = useSelector(getRegistrationUsername);
    const password = useSelector(getRegistrationPassword);
    const reqPassword = useSelector(getRegistrationReqPassword);
    const isLoading = useSelector(getRegistrationIsLoading);

    const handleChangeUsername = useCallback(
        (value: string) => {
            dispatch(registrationActions.setUsername(value));
        },
        [dispatch]
    );

    const handleChangePassword = useCallback(
        (value: string) => {
            dispatch(registrationActions.setPassword(value));
        },
        [dispatch]
    );

    const handleChangeReqPassword = useCallback(
        (value: string) => {
            dispatch(registrationActions.setReqPassword(value));
        },
        [dispatch]
    );

    const handleClickButton = async () => {
        const result = await dispatch(registration({ username, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            props.onSuccess();
        }
    };

    const registrationBtnDisabled = isLoading || !username || !password || !reqPassword || password !== reqPassword;

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <VStack gap="8" className={classNames(cls.RegistrationForm, {}, [props.className])}>
                <Text title={t('Форма регистрации')} />
                <RegistrationFormErrors />

                <Input
                    placeholder={t('Введите username')}
                    autofocus
                    onChange={handleChangeUsername}
                    value={username}
                    autoComplete="false"
                />
                <Input
                    placeholder={t('Введите пароль')}
                    type="password"
                    onChange={handleChangePassword}
                    value={password}
                    autoComplete="false"
                />
                <Input
                    placeholder={t('Повторите пароль')}
                    type="password"
                    onChange={handleChangeReqPassword}
                    value={reqPassword}
                    autoComplete="false"
                />

                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.btn}
                    onClick={handleClickButton}
                    disabled={registrationBtnDisabled}
                >
                    {t('Регистрация')}
                </Button>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default RegistrationForm;
