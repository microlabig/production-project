import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

type TLoginFormProps = {
    className?: string;
};

export const LoginForm = memo((props: TLoginFormProps) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { username, password, error, isLoading } = useSelector(getLoginState);

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

    const handleClickButton = () => {
        dispatch(loginByUsername({ username, password }));
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [props.className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text theme={TextTheme.ERROR} text={t('Неверный логин или пароль')} />}

            <Input placeholder={t('Введите username')} autofocus onChange={handleChangeUsername} value={username} />
            <Input placeholder={t('Введите пароль')} type="password" onChange={handleChangePassword} value={password} />

            <Button theme={ButtonTheme.OUTLINE} className={cls.btn} onClick={handleClickButton} disabled={isLoading}>
                {t('Войти')}
            </Button>
        </div>
    );
});
