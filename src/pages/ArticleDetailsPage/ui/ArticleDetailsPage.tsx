import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

type TArticleDetailsPageProps = {
    className?: string;
};

const ArticleDetailsPage = memo((props: TArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
        }
    });

    if (!id) {
        return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t('Статья не найдена')}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />

                <Text title={t('Комментарии')} className={cls.commentTitle} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
});

export default memo(ArticleDetailsPage);
