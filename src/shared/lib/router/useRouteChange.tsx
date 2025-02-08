import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { AppRouterByPathPattern, AppRoutes } from '@/shared/constants/router';

export function useRouteChange() {
    const location = useLocation();

    const appRoutes = useMemo(() => {
        let foundRoute: AppRoutes = AppRoutes.MAIN;

        Object.entries(AppRouterByPathPattern).forEach(([pattern, route]) => {
            if (matchPath(pattern, location.pathname)) {
                foundRoute = route;
            }
        });

        return foundRoute;
    }, [location.pathname]);

    return appRoutes;
}
