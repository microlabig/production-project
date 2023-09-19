import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface TNavbarProps {
    className?: string;
}

export function Navbar(props: TNavbarProps) {
    const dispatch = useDispatch();
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
            {authData ? renderAuthLayout : renderNoAuthLayout}

            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={handleClose} />}
        </header>
    );
}
