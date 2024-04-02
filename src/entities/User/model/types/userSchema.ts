import { FeaturesFlags } from '@/shared/types/features';
import { UserRole } from '../constants/constants';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeaturesFlags;
}

export interface UserSchema {
    authData?: User;

    _inited?: boolean;
}
