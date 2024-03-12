import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../getProfileData/getProfileData';

export const getProfileCanEdit = createSelector(
    getUserAuthData,
    getProfileData,
    (authData, profileData) => !!authData && String(authData.id) === String(profileData?.id)
);
