import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
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

            {block.title && <Text text={block.title} align={TextAlign.CENTER} className={cls.title} />}
        </div>
    );
});
