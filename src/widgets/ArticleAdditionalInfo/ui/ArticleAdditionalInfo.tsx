import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { User } from '@/entities/User';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

type TArticleAdditionalInfoProps = {
    author: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
    className?: string;
};

export const ArticleAdditionalInfo = memo((props: TArticleAdditionalInfoProps) => {
    const { t } = useTranslation();
    const { author, createdAt, views, onEdit, className } = props;

    return (
        <VStack gap="32" className={className}>
            <HStack gap="8">
                <Avatar src={author.avatar} size={32} />
                <Text text={author.username} bold />
                <Text text={createdAt} bold />
            </HStack>
            <Button onClick={onEdit}>{t('Редактировать')}</Button>
            <Text text={t('{{count}} просмотров', { count: views })} />
        </VStack>
    );
});
