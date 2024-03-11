import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';

import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

type TArticleDetailsCommentsProps = {
    id?: string;

    className?: string;
};

export const ArticleDetailsComments = memo((props: TArticleDetailsCommentsProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article');
    const { className, id } = props;

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
        }
    });

    const handleSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    if (!id) {
        return <Text text={t('Комментарии не найдены')} />;
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('Комментарии')} />
            <AddCommentForm onSendComment={handleSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
    );
});
