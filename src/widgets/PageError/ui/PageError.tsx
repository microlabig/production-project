import { ErrorInfo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

import cls from './PageError.module.scss';

type TPageErrorProps = {
    error: Error | null;
    errorInfo: ErrorInfo | null;
};

export function PageError(props: TPageErrorProps) {
    const { t } = useTranslation();

    const onReload = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [])}>
            <div>
                <h2 className={cls.title}>{t('Что-то пошло не так')}</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {props.error && props.error.toString()}
                    <br />
                    {props.errorInfo?.componentStack}
                </details>
            </div>
            <Button onClick={onReload} className={cls.button}>
                {t('Перезагрузить')}
            </Button>
        </div>
    );
}
