import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Page } from '@/widgets/Page';

type TForbiddenPageProps = {
    className?: string;
};

const ForbiddenPage = memo((props: TForbiddenPageProps) => {
    const { t } = useTranslation();

    return <Page className={classNames('', {}, [props.className])}>{t('У вас нет доступа к этой странице')}</Page>;
});

export default memo(ForbiddenPage);
