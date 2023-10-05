import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

function MainPage() {
    const { t } = useTranslation('main');

    return <Page className="wrapper">{t('Главная страница')}</Page>;
}

export default memo(MainPage);
