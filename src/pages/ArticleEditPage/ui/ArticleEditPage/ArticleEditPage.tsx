import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import cls from './ArticleEditPage.module.scss';

type TArticleEditPageProps = {
    className?: string;
};

const ArticleEditPage = (props: TArticleEditPageProps) => {
    const { className } = props;

    const { id } = useParams<{ id: string }>();

    const isEdit = Boolean(id);

    const text = isEdit ? 'Редактирование статьи' : 'Создание статьи';

    return <Page className={classNames(cls.ArticleEditPage, {}, [className])}>{text}</Page>;
};

export default memo(ArticleEditPage);
