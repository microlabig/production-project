import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
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
            {block.title && <Text title={block.title} className={cls.title} />}

            {block.paragraphs.map(paragraph => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
