import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleImageBlock } from '../../model/types/articleDetails';

import cls from './ArticleImageBlockComponent.module.scss';

type TArticleImageBlockComponentProps = {
    block: ArticleImageBlock;

    className?: string;
};

export const ArticleImageBlockComponent = memo((props: TArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />

            {block.title && (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text text={block.title} align={TextAlign.CENTER} className={cls.title} />}
                    off={<TextDeprecated text={block.title} align={TextAlign.CENTER} className={cls.title} />}
                />
            )}
        </div>
    );
});
