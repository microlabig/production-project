import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface TNavbarProps {
    className?: string;
}

export const Navbar = memo((props: TNavbarProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);

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
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={handleLogout}>
            {t('Выйти')}
        </Button>
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
