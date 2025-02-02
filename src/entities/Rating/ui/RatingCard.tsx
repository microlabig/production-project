import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        placeholder={t('Ваш отзыв')}
                        value={feedback}
                        onChange={setFeedback}
                        data-testid="RatingCard.Input"
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle} />
                    <InputDeprecated
                        placeholder={t('Ваш отзыв')}
                        value={feedback}
                        onChange={setFeedback}
                        data-testid="RatingCard.Input"
                    />
                </>
            }
        />
    );
    const content = (
        <>
            <VStack align="center" gap="8">
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text title={starCount ? t('Спасибо за оценку!') : title} />}
                    off={<TextDeprecated title={starCount ? t('Спасибо за оценку!') : title} />}
                />
                <StarRating selectedStars={starCount} size={40} onSelect={handleSelectStars} />
            </VStack>

            <BrowserView>
                <Modal isOpen={isModalOpen} isLazy>
                    <VStack gap="32" max>
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <HStack max gap="16" justify="end">
                                    <Button onClick={handleCancel} data-testid="RatingCard.Close">
                                        {t('Закрыть')}
                                    </Button>
                                    <Button onClick={handleAccept} data-testid="RatingCard.Send">
                                        {t('Отправить')}
                                    </Button>
                                </HStack>
                            }
                            off={
                                <HStack max gap="16" justify="end">
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={handleCancel}
                                        data-testid="RatingCard.Close"
                                    >
                                        {t('Закрыть')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated onClick={handleAccept} data-testid="RatingCard.Send">
                                        {t('Отправить')}
                                    </ButtonDeprecated>
                                </HStack>
                            }
                        />
                    </VStack>
                </Modal>
            </BrowserView>

            <MobileView>
                <Drawer isOpen={isModalOpen} isLazy onClose={handleCancel}>
                    <VStack gap="32">
                        {modalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <Button size="l" onClick={handleCancel} fullWidth>
                                    {t('Закрыть')}
                                </Button>
                            }
                            off={
                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE_RED}
                                    size={ButtonSize.L}
                                    onClick={handleCancel}
                                    fullWidth
                                >
                                    {t('Закрыть')}
                                </ButtonDeprecated>
                            }
                        />
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames('', {}, [className])}
                    max
                    data-testid="RatingCard"
                    padding="24"
                    border="round"
                >
                    {content}
                </Card>
            }
            off={
                <CardDeprecated className={classNames('', {}, [className])} max data-testid="RatingCard">
                    {content}
                </CardDeprecated>
            }
        />
    );
});
