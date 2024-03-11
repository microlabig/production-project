import { createSelector } from '@reduxjs/toolkit';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import { RoutePath } from '@/shared/constants/router';

import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, authData => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            text: 'Главная',
            Icon: MainIcon,
        },
        {
            path: RoutePath.about,
            text: 'О странице',
            Icon: AboutIcon,
        },
    ];

    if (authData) {
        sidebarItemsList.push(
            {
                path: `${RoutePath.profile}/${authData.id}`,
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: 'Статьи',
                Icon: ArticleIcon,
                authOnly: true,
            }
        );
    }

    return sidebarItemsList;
});
