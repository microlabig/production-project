import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

type TCommentListProps = {
    comments?: Comment[];
    isLoading?: boolean;

    className?: string;
};

export const CommentList = memo((props: TCommentListProps) => {
    const { t } = useTranslation();
    const { comments, isLoading, className } = props;

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {!!comments?.length ? (
                comments.map(comment => (
                    <CommentCard isLoading={isLoading} className={cls.comment} key={comment.id} comment={comment} />
                ))
            ) : (
                <Text text={t('Комментарии отсутствуют')} />
            )}
        </div>
    );
});
