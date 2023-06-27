import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');

    return <div className="wrapper">{t('Главная страница')}</div>;
}

export default MainPage;
