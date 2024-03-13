import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './NotFoundPage.module.scss';

type TNotFoundPageProps = {
    className?: string;
};

export const NotFoundPage = memo((props: TNotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <Page data-testid="NotFoundPage" className={classNames(cls.NotFoundPage, {}, [props.className])}>
            {t('Страница не найдена')}
        </Page>
    );
});
