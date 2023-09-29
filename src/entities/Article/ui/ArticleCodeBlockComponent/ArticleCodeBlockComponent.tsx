import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/articleDetails';
import cls from './ArticleCodeBlockComponent.module.scss';

type TArticleCodeBlockComponentProps = {
    block: ArticleCodeBlock;

    className?: string;
};

export const ArticleCodeBlockComponent = memo((props: TArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
