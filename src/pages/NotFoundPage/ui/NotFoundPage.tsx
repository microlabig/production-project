import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

type TNotFoundPageProps = {
    className?: string;
};

export function NotFoundPage(props: TNotFoundPageProps) {
    const { t } = useTranslation();

    return <div className={classNames(cls.NotFoundPage, {}, [props.className])}>{t('Страница не найдена')}</div>;
}