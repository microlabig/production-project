import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Input } from '@/shared/ui/deprecated/Input';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

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
            <Input
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
                data-testid="RatingCard.Input"
            />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])} max data-testid="RatingCard">
            <VStack align="center" gap="8">
                <Text title={starCount ? t('Спасибо за оценку!') : title} />
                <StarRating selectedStars={starCount} size={40} onSelect={handleSelectStars} />
            </VStack>

            <BrowserView>
                <Modal isOpen={isModalOpen} isLazy>
                    <VStack gap="32" max>
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={handleCancel}
                                data-testid="RatingCard.Close"
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button onClick={handleAccept} data-testid="RatingCard.Send">
                                {t('Отправить')}
                            </Button>
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
