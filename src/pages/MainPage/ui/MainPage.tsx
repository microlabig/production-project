import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <Page className="wrapper">
            <Counter />
            {t('Главная страница')}
        </Page>
    );
}

export default memo(MainPage);
