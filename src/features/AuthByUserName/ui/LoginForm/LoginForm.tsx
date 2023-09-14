import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

type TLoginFormProps = {
    className?: string;
};

export function LoginForm(props: TLoginFormProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [props.className])}>
            <Input placeholder={t('Введите username')} autofocus />
            <Input placeholder={t('Введите пароль')} />
            <Button className={cls.btn}>{t('Войти')}</Button>
        </div>
    );
}
