import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
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
    const forceUpdate = useForceUpdate();

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
            forceUpdate();
            window.location.reload();
            props.onSuccess();
        }
    };

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack gap="32" className={classNames(cls.LoginForm, {}, [props.className])}>
                        <Text title={t('Форма авторизации')} />
                        {error && <Text variant="error" text={t('Неверный логин или пароль')} />}

                        <Input
                            placeholder={t('Введите username')}
                            autofocus
                            onChange={handleChangeUsername}
                            value={username}
                        />
                        <Input
                            placeholder={t('Введите пароль')}
                            type="password"
                            onChange={handleChangePassword}
                            value={password}
                        />

                        <Button
                            className={cls.btn}
                            onClick={handleClickButton}
                            disabled={isLoading || !username || !password}
                        >
                            {t('Войти')}
                        </Button>
                    </VStack>
                }
                off={
                    <VStack gap="8" className={classNames(cls.LoginForm, {}, [props.className])}>
                        <TextDeprecated title={t('Форма авторизации')} />
                        {error && <TextDeprecated theme={TextTheme.ERROR} text={t('Неверный логин или пароль')} />}

                        <InputDeprecated
                            placeholder={t('Введите username')}
                            autofocus
                            onChange={handleChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            placeholder={t('Введите пароль')}
                            type="password"
                            onChange={handleChangePassword}
                            value={password}
                        />

                        <ButtonDeprecated
                            theme={ButtonTheme.OUTLINE}
                            className={cls.btn}
                            onClick={handleClickButton}
                            disabled={isLoading || !username || !password}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    </VStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
