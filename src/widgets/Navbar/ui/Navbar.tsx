import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './Navbar.module.scss';

interface TNavbarProps {
    className?: string;
}

export function Navbar(props: TNavbarProps) {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const handleToggleModal = useCallback(() => setIsAuthModal(prev => !prev), []);

    return (
        <header className={classNames(cls.navbar, {}, [props.className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={handleToggleModal}>
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={handleToggleModal}>
                {t(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem iusto doloribus tempora incidunt,
                deleniti ab nisi, enim minima eius ad recusandae veniam a voluptates impedit architecto aliquid fuga
                laboriosam!`)}
            </Modal>
        </header>
    );
}
