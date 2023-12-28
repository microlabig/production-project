import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { RoutePath } from 'shared/config/routeConfig/constants';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
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
            <VStack gap="16" max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
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
        <VStack gap="16" max className={classNames(cls.CommentCard, {}, [className])}>
            <HStack align="center">
                <AppLink to={`${RoutePath.profile}/${comment.user.id}`}>
                    {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                </AppLink>
                <Text text={comment.user.username} className={cls.username} />
            </HStack>
            <Text text={comment.text} />
        </VStack>
    );
});
