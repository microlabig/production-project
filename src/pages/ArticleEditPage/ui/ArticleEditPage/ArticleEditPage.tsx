import { memo } from 'react';

import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

type TArticleEditPageProps = {
    className?: string;
};

const ArticleEditPage = (props: TArticleEditPageProps) => {
    const { className } = props;

    const { id } = useParams<{ id: string }>();

    const isEdit = Boolean(id);

    const text = isEdit ? 'Редактирование статьи' : 'Создание статьи';

    return <Page className={classNames('', {}, [className])}>{text}</Page>;
};

export default memo(ArticleEditPage);
