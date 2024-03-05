import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

type TAdminPanelPageProps = {
    className?: string;
};

const AdminPanelPage = memo((props: TAdminPanelPageProps) => {
    const { t } = useTranslation('admin');
    const { className } = props;

    return <Page className={classNames('', {}, [className])}>{t('Админ панель')}</Page>;
});

export default memo(AdminPanelPage);
