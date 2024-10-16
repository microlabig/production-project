import { memo } from 'react';

import { ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

import ListIcon from '@/shared/assets/icons/burger.svg';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';

import cls from './ArticleViewSelector.module.scss';

type TArticleViewSelectorProps = {
    view: ArticleView;
    onViewClick: (newView: ArticleView) => void;

    className?: string;
};

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({ name: 'isAppRedesigned', on: () => TiledIcon, off: () => TiledIconDeprecated }),
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({ name: 'isAppRedesigned', on: () => ListIcon, off: () => ListIconDeprecated }),
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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card border="round" className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className])}>
                    <HStack gap="8">
                        {viewTypes.map(viewType => (
                            <Icon
                                key={viewType.view}
                                width={24}
                                height={24}
                                Svg={viewType.icon}
                                clickable
                                onClick={handleViewClick(viewType.view)}
                                className={classNames('', { [cls.notSelected]: view !== viewType.view }, [])}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
                    {viewTypes.map(viewType => (
                        <ButtonDeprecated
                            key={viewType.view}
                            theme={ButtonTheme.CLEAR}
                            onClick={handleViewClick(viewType.view)}
                        >
                            <IconDeprecated
                                width={24}
                                height={24}
                                Svg={viewType.icon}
                                className={classNames('', { [cls.notSelected]: view !== viewType.view }, [])}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
});
