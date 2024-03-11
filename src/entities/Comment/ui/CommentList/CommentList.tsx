import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

type TCommentListProps = {
    comments?: Comment[];
    isLoading?: boolean;

    className?: string;
};

export const CommentList = memo((props: TCommentListProps) => {
    const { t } = useTranslation();
    const { comments, isLoading, className } = props;

    if (isLoading) {
        return (
            <VStack max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack max className={classNames('', {}, [className])}>
            {!!comments?.length ? (
                comments.map(comment => <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />)
            ) : (
                <Text text={t('Комментарии отсутствуют')} />
            )}
        </VStack>
    );
});
