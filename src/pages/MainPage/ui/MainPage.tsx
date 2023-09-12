import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div className="wrapper">
            {t('Главная страница')}
            <Counter />
        </div>
    );
}

export default MainPage;
