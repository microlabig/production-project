import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getRouteArticleDetails } from '@/shared/constants/router';
import { ARTICLE_INDEX_SESSION_STORAGE_KEY } from '@/shared/constants/sessionStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import { ArticleBlockType, ArticleView } from '../../model/constants/constants';
import { Article, ArticleTextBlock } from '../../model/types/articleDetails';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleListItem.module.scss';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';

type TArticleListItemProps = {
    target?: HTMLAttributeAnchorTarget;
    article: Article;
    view: ArticleView;
    index?: number;

    className?: string;
};

export const ArticleListItem = memo((props: TArticleListItemProps) => {
    const { t } = useTranslation();
    const { className, article, view, target, index } = props;

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    const handleClickReadMore = () => {
        if (index === undefined) {
            return;
        }
        sessionStorage.setItem(ARTICLE_INDEX_SESSION_STORAGE_KEY, String(index));
    };

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(item => item.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <AppLink to={getRouteArticleDetails(article.id)}>
                            <Button theme={ButtonTheme.OUTLINE} onClick={handleClickReadMore}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            onClick={handleClickReadMore}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
