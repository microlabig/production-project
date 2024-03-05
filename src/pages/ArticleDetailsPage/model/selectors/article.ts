import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';

export const getArticleCanEdit = createSelector(getUserAuthData, getArticleDetailsData, (userData, articleDetails) => {
    if (!userData || !articleDetails) {
        return false;
    }

    return userData.id === articleDetails.user?.id;
});
