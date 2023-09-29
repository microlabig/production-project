import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

type TArticleDetailsPageProps = {
    className?: string;
};

const ArticleDetailsPage = memo((props: TArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t('Статья не найдена')}</div>;
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
});

export default memo(ArticleDetailsPage);
