import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface TNavbarProps {
    className?: string;
}

export const Navbar = memo((props: TNavbarProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const [isAuthModal, setIsAuthModal] = useState(false);

    useEffect(() => {
        if (authData) {
            setIsAuthModal(false);
        }
    }, [authData]);

    const handleOpen = useCallback(() => setIsAuthModal(true), []);
    const handleClose = useCallback(() => setIsAuthModal(false), []);

    const handleLogout = useCallback(() => dispatch(userActions.logout()), [dispatch]);

    const renderNoAuthLayout = (
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={handleOpen}>
            {t('Войти')}
        </Button>
    );

    const renderAuthLayout = (
        <Dropdown
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('Админка'),
                              href: RoutePath.admin_panel,
                          },
                      ]
                    : []),
                {
                    content: t('Профиль'),
                    href: `${RoutePath.profile}/${authData?.id ?? ''}`,
                },
                {
                    content: t('Выйти'),
                    onClick: handleLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData?.avatar} />}
            direction="bottom left"
            className={cls.dropdown}
        />
    );

    return (
        <header className={classNames(cls.navbar, {}, [props.className])}>
            <Text theme={TextTheme.INVERTED} className={cls.appName} title={t('News app')} />
            <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.article_create} className={cls.createLink}>
                {t('Создать статью')}
            </AppLink>

            {authData ? renderAuthLayout : renderNoAuthLayout}

            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={handleClose} />}
        </header>
    );
});
