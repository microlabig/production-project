import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { RegistrationModal } from '@/features/AuthRegistration';
import { AvatarDropDown } from '@/features/AvatarDropDown';
import { NotificationButton } from '@/features/NotificationButton';
import { getRouteArticleCreate } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';

import cls from './Navbar.module.scss';

interface TNavbarProps {
    className?: string;
}

export const Navbar = memo((props: TNavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isRegistrationModal, setIsRegistrationModal] = useState(false);

    const authData = useSelector(getUserAuthData);

    useEffect(() => {
        if (authData) {
            setIsAuthModal(false);
            setIsRegistrationModal(false);
        }
    }, [authData]);

    const handleOpenAuthModal = useCallback(() => setIsAuthModal(true), []);
    const handleCloseAuthModal = useCallback(() => setIsAuthModal(false), []);
    const handleOpenRegistrationModal = useCallback(() => setIsRegistrationModal(true), []);
    const handleCloseRegistrationModal = useCallback(() => setIsRegistrationModal(false), []);

    const renderNoAuthLayout = (
        <HStack gap="32" className={cls.authButtons}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={handleOpenRegistrationModal}>
                {t('Регистрация')}
            </Button>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={handleOpenAuthModal}>
                {t('Войти')}
            </Button>
        </HStack>
    );

    const renderAuthLayout = (
        <HStack gap="16" className={cls.actions}>
            <NotificationButton />
            <AvatarDropDown />
        </HStack>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <header className={classNames(cls.NavbarRedesigned, {}, [props.className])}>
                    {authData ? renderAuthLayout : renderNoAuthLayout}

                    {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={handleCloseAuthModal} />}
                    {isRegistrationModal && (
                        <RegistrationModal isOpen={isRegistrationModal} onClose={handleCloseRegistrationModal} />
                    )}
                </header>
            }
            off={
                <header className={classNames(cls.Navbar, {}, [props.className])}>
                    <Text theme={TextTheme.INVERTED} className={cls.appName} title={t('News app')} />
                    {authData && (
                        <AppLink theme={AppLinkTheme.SECONDARY} to={getRouteArticleCreate()} className={cls.createLink}>
                            {t('Создать статью')}
                        </AppLink>
                    )}

                    {authData ? renderAuthLayout : renderNoAuthLayout}

                    {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={handleCloseAuthModal} />}
                    {isRegistrationModal && (
                        <RegistrationModal isOpen={isRegistrationModal} onClose={handleCloseRegistrationModal} />
                    )}
                </header>
            }
        />
    );

    return (
        <header className={classNames(cls.navbar, {}, [props.className])}>
            <Text theme={TextTheme.INVERTED} className={cls.appName} title={t('News app')} />
            {authData && (
                <AppLink theme={AppLinkTheme.SECONDARY} to={getRouteArticleCreate()} className={cls.createLink}>
                    {t('Создать статью')}
                </AppLink>
            )}

            {authData ? renderAuthLayout : renderNoAuthLayout}

            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={handleCloseAuthModal} />}
            {isRegistrationModal && (
                <RegistrationModal isOpen={isRegistrationModal} onClose={handleCloseRegistrationModal} />
            )}
        </header>
    );
});
