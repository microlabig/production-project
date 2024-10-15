import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';

type TArticlePageGreetingProps = {
    className?: string;
};

export const ArticlePageGreeting = memo((props: TArticlePageGreetingProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const handleClose = () => setIsOpen(false);

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t('Здесь вы можете искать и просматривать статьи на различные темы')}
        />
    );

    if (isMobile) {
        return (
            <Drawer isLazy isOpen={isOpen} onClose={handleClose} className={className}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal className={className} isLazy isOpen={isOpen} onClose={handleClose}>
            {text}
        </Modal>
    );
});
