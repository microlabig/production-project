import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

type TRatingProps = {
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    rate?: number;

    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback?: string) => void;

    className?: string;
};

export const RatingCard = memo((props: TRatingProps) => {
    const { t } = useTranslation();
    const { className, feedbackTitle, hasFeedback, onAccept, onCancel, title, rate = 0 } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starCount, setStarCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const handleSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept]
    );

    const handleAccept = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starCount, feedback);
    }, [feedback, onAccept, starCount]);

    const handleCancel = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starCount);
    }, [onCancel, starCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input placeholder={t('Ваш отзыв')} value={feedback} onChange={setFeedback} />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])} max>
            <VStack align="center" gap="8">
                <Text title={starCount ? t('Спасибо за оценку!') : title} />
                <StarRating selectedStars={starCount} size={40} onSelect={handleSelectStars} />
            </VStack>

            <BrowserView>
                <Modal isOpen={isModalOpen} isLazy>
                    <VStack gap="32" max>
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button theme={ButtonTheme.OUTLINE_RED} onClick={handleCancel}>
                                {t('Закрыть')}
                            </Button>
                            <Button onClick={handleAccept}>{t('Отправить')}</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>

            <MobileView>
                <Drawer isOpen={isModalOpen} isLazy onClose={handleCancel}>
                    <VStack gap="32">
                        {modalContent}
                        <Button theme={ButtonTheme.OUTLINE_RED} size={ButtonSize.L} onClick={handleCancel} fullWidth>
                            {t('Закрыть')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
