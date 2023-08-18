import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

function AppRouter() {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<div>{t('Loading')}</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route key={path} element={<div className="page-wrapper">{element}</div>} path={path} />
                ))}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
