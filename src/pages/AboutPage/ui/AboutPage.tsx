import { memo } from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('about');

    return <div className="wrapper">{t('О сайте')}</div>;
}

export default memo(AboutPage);
