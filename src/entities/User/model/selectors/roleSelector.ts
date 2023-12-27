import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/providers/store-provider';
import { UserRole } from '../types/userSchema';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles ?? [];

export const isUserAdmin = createSelector(getUserRoles, roles => !!roles.includes(UserRole.ADMIN));
export const isUserManager = createSelector(getUserRoles, roles => !!roles.includes(UserRole.MANAGER));
