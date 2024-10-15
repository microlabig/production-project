import { memo } from 'react';

import { getRouteProfile } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

type TCommentCardProps = {
    comment?: Comment;
    isLoading?: boolean;

    className?: string;
};

export const CommentCard = memo((props: TCommentCardProps) => {
    const { comment, isLoading, className } = props;

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(cls.CommentCard, {}, [className, cls.loading])}
                data-testid="CommentCard.Loading"
            >
                <HStack align="center">
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} className={cls.username} />
                </HStack>
                <Skeleton width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack gap="16" max className={classNames(cls.CommentCard, {}, [className])} data-testid="CommentCard.Content">
            <HStack align="center">
                <AppLink to={getRouteProfile(comment.user.id)}>
                    {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                </AppLink>
                <Text text={comment.user.username} className={cls.username} />
            </HStack>
            <Text text={comment.text} />
        </VStack>
    );
});
