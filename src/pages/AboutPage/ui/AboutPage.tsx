import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

function AboutPage() {
    const { t } = useTranslation('about');

    return <Page className="wrapper">{t('О сайте')}</Page>;
}

export default memo(AboutPage);
