import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleTextBlock } from '../../model/types/articleDetails';

import cls from './ArticleTextBlockComponent.module.scss';

type TArticleTextBlockComponentProps = {
    block: ArticleTextBlock;

    className?: string;
};

export const ArticleTextBlockComponent = memo((props: TArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text title={block.title} className={cls.title} />}
                    off={<TextDeprecated title={block.title} className={cls.title} />}
                />
            )}

            {block.paragraphs.map(paragraph => (
                <ToggleFeatures
                    key={paragraph}
                    feature="isAppRedesigned"
                    on={<Text text={paragraph} className={cls.paragraph} />}
                    off={<TextDeprecated text={paragraph} className={cls.paragraph} />}
                />
            ))}
        </div>
    );
});
