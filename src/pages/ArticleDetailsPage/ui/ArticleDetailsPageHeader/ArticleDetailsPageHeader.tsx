import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { getArticleDetailsData } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getArticleCanEdit } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

type TArticleDetailsPageHeaderProps = {
    className?: string;
};

export const ArticleDetailsPageHeader = memo((props: TArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article');
    const { className } = props;

    const navigate = useNavigate();

    const canEdit = useSelector(getArticleCanEdit);
    const article = useSelector(getArticleDetailsData);

    const handleBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const handleEditArticle = useCallback(() => {
        if (article) {
            navigate(`${RoutePath.articles}/${article.id}/edit`);
        }
    }, [article, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button onClick={handleBackToList} theme={ButtonTheme.OUTLINE}>
                {t('Назад к списку')}
            </Button>

            {canEdit && (
                <Button onClick={handleEditArticle} theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});
