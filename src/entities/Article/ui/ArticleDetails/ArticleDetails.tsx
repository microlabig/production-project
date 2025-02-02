import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated, TextAlign, TextSize } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleDetailsById } from '../../model/services/fetchArticleDetailsById/fetchArticleDetailsById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

import { renderArticleBlocks } from './renderBlocks';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';

import cls from './ArticleDetails.module.scss';

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <HStack justify="center" max>
                <AvatarDeprecated size={200} src={article?.img} className={cls.avatar} />
            </HStack>
            <VStack gap="4" max data-testid="ArticleDetails.Info">
                <TextDeprecated
                    size={TextSize.L}
                    title={article?.title}
                    text={article?.subtitle}
                    className={cls.title}
                />
                <HStack gap="8">
                    <IconDeprecated Svg={EyeIcon} className={cls.icon} />
                    <TextDeprecated text={article?.views ? String(article.views) : undefined} />
                </HStack>
                <HStack gap="8">
                    <IconDeprecated Svg={CalendarIcon} className={cls.icon} />
                    <TextDeprecated text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlocks)}
        </>
    );
};

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <Text bold size="l" title={article?.title} />
            <Text title={article?.subtitle} />
            <AppImage
                fallback={<SkeletonRedesigned width="100%" height={420} border="16px" />}
                src={article?.img}
                className={cls.img}
            />
            {article?.blocks.map(renderArticleBlocks)}
        </>
    );
};

type TArticleDetailsProps = {
    id?: string;

    className?: string;
};

export const ArticleDetails = memo((props: TArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    const { id, className } = props;

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchArticleDetailsById(id));
        }
    });

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
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
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузки статьи.')} />}
                off={<TextDeprecated align={TextAlign.CENTER} title={t('Произошла ошибка при загрузки статьи.')} />}
            />
        );
    } else {
        content = <ToggleFeatures feature="isAppRedesigned" on={<Redesigned />} off={<Deprecated />} />;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="16" max className={classNames('', {}, [className])} data-testid="ArticleDetails">
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
