import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

export type TLoginFormProps = {
    className?: string;
    onSuccess: () => void;
};

const LoginForm = memo((props: TLoginFormProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const handleChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const handleChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const handleClickButton = async () => {
        const result = await dispatch(loginByUsername({ username, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            props.onSuccess();
        }
    };

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <VStack gap="8" className={classNames(cls.LoginForm, {}, [props.className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text theme={TextTheme.ERROR} text={t('Неверный логин или пароль')} />}

                <Input placeholder={t('Введите username')} autofocus onChange={handleChangeUsername} value={username} />
                <Input
                    placeholder={t('Введите пароль')}
                    type="password"
                    onChange={handleChangePassword}
                    value={password}
                />

                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.btn}
                    onClick={handleClickButton}
                    disabled={isLoading || !username || !password}
                >
                    {t('Войти')}
                </Button>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
