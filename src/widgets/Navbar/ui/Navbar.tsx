import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import cls from './Navbar.module.scss';

interface TNavbarProps {
    className?: string;
}

export function Navbar(props: TNavbarProps) {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const handleOpen = useCallback(() => setIsAuthModal(true), []);
    const handleClose = useCallback(() => setIsAuthModal(false), []);

    return (
        <header className={classNames(cls.navbar, {}, [props.className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={handleOpen}>
                {t('Войти')}
            </Button>

            <LoginModal isOpen={isAuthModal} onClose={handleClose} />
        </header>
    );
}
