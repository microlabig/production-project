import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';

import cls from './ArticleDetails.module.scss';

import { ArticleBlockType } from '../../model/constants/constants';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleDetailsById } from '../../model/services/fetchArticleDetailsById/fetchArticleDetailsById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/articleDetails';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

function renderBlocks(block: ArticleBlock) {
    switch (block.type) {
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} block={block} className={cls.block} />;

        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block} />;

        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />;

        default:
            return null;
    }
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

type TArticleDetailsProps = {
    id?: string;

    className?: string;
};

export const ArticleDetails = memo((props: TArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    const { id, className } = props;

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchArticleDetailsById(id));
        }
    });

    let content;

    if (!id) {
        return <Text text={t('Статья не найдена')} />;
    }

    if (isLoading) {
        content = (
            <>
                <HStack justify="center" max>
                    <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                </HStack>
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = <Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузки статьи.')} />;
    } else {
        content = (
            <>
                <HStack justify="center" max>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </HStack>
                <VStack gap="4" max>
                    <Text size={TextSize.L} title={article?.title} text={article?.subtitle} className={cls.title} />
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} className={cls.icon} />
                        <Text text={article?.views ? String(article.views) : undefined} />
                    </HStack>
                    <HStack gap="8">
                        <Icon Svg={CalendarIcon} className={cls.icon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlocks)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="16" max className={classNames('', {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
