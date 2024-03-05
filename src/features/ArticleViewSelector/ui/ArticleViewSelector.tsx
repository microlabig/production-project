import { memo } from 'react';
import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

type TArticleViewSelectorProps = {
    view: ArticleView;
    onViewClick: (newView: ArticleView) => void;

    className?: string;
};

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: TArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    // создаем своего рода замыкание, в котором для последней функции
    // например можно использовать эвент e: React.MouseEvent
    const handleViewClick = (newView: ArticleView) => () => {
        onViewClick(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button key={viewType.view} theme={ButtonTheme.CLEAR} onClick={handleViewClick(viewType.view)}>
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.selected]: view === viewType.view }, [])}
                    />
                </Button>
            ))}
        </div>
    );
});
