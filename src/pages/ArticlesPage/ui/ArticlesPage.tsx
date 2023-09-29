import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticlesPage.module.scss';

type TArticlesPageProps = {
    className?: string;
};

const ArticlesPage = memo((props: TArticlesPageProps) => {
    const { t } = useTranslation('article');
    const { className } = props;

    return <div className={classNames(cls.ArticlesPage, {}, [className])}>{t('ArticlesPage')}</div>;
});

export default memo(ArticlesPage);
