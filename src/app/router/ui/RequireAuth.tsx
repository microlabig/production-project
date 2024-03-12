import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/constants/router';

interface IRequireAuth {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: IRequireAuth) {
    const auth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);
    const location = useLocation();

    // проверка на роли
    const hasRequiredMemo = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some(role => userRoles.includes(role));
    }, [roles, userRoles]);

    if (!auth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }

    if (!hasRequiredMemo) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }

    return children;
}
