import { memo } from 'react';

import { getRouteProfile } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

type TCommentCardProps = {
    comment?: Comment;
    isLoading?: boolean;

    className?: string;
};

export const CommentCard = memo((props: TCommentCardProps) => {
    const { comment, isLoading, className } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card max padding="24" border="round">
                    <VStack
                        gap="16"
                        max
                        className={classNames(cls.CommentCardRedesigned, {}, [className])}
                        data-testid="CommentCard.Content"
                    >
                        <HStack align="center" gap="8">
                            <AppLink to={getRouteProfile(comment.user.id)}>
                                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                            </AppLink>
                            <Text text={comment.user.username} bold />
                        </HStack>
                        <Text text={comment.text} />
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    gap="16"
                    max
                    className={classNames(cls.CommentCard, {}, [className])}
                    data-testid="CommentCard.Content"
                >
                    <HStack align="center">
                        <AppLinkDeprecated to={getRouteProfile(comment.user.id)}>
                            {comment.user.avatar && <AvatarDeprecated size={30} src={comment.user.avatar} />}
                        </AppLinkDeprecated>
                        <TextDeprecated text={comment.user.username} className={cls.username} />
                    </HStack>
                    <TextDeprecated text={comment.text} />
                </VStack>
            }
        />
    );
});
