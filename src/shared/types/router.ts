import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line bzm-fsd-plugin/layer-imports
import { UserRole } from '@/entities/User'; // TODO: fix

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
