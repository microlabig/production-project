import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getRouteArticleDetails } from '@/shared/constants/router';
import { ARTICLE_INDEX_SESSION_STORAGE_KEY } from '@/shared/constants/sessionStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleBlockType, ArticleView } from '../../../model/constants/constants';
import { ArticleTextBlock } from '../../../model/types/articleDetails';
import { TArticleListItemProps } from '../../../model/types/articleListItem';

import EyeIcon from '@/shared/assets/icons/eye.svg';

import cls from './ArticleListItemRedesigned.module.scss';

export const ArticleListItemRedesigned = memo((props: TArticleListItemProps) => {
    const { t } = useTranslation();
    const { className, article, view, target, index } = props;

    const types = <Text text={article.type.join(', ')} />;
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );
    const userInfo = (
        <>
            <Avatar size={32} src={article.user.avatar} className={cls.avatar} />
            <Text bold text={article.user.username} />
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
            <Card
                max
                padding="24"
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItemRedesigned, {}, [className, cls[view]])}
            >
                <VStack max gap="16">
                    <HStack gap="8" max>
                        <Avatar size={32} src={article.user.avatar} />
                        <Text text={article.user.username} bold />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text title={article.title} bold />
                    <Text title={article.subtitle} />
                    {types}
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        fallback={<Skeleton width="100%" height={250} />}
                        className={cls.img}
                    />
                    {textBlock?.paragraphs && (
                        <Text text={textBlock.paragraphs.slice(0, 2).join(' ')} className={cls.textBlock} />
                    )}
                    <HStack max justify="between">
                        <AppLink to={getRouteArticleDetails(article.id)}>
                            <Button variant="outline" onClick={handleClickReadMore}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card} border="round" padding="0">
                <AppImage
                    fallback={<Skeleton width={200} height={200} />}
                    alt={article.title}
                    src={article.img}
                    className={cls.img}
                />
                <VStack className={cls.info} gap="4">
                    <Text title={article.title} className={cls.title} />
                    <VStack gap="4" className={cls.footer} max>
                        <HStack justify="between" max>
                            <Text text={article.createdAt} className={cls.date} />
                            {views}
                        </HStack>
                        <HStack gap="4">{userInfo}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
