import { memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../redesigned/Stack';
import { Icon } from '../Icon/Icon';

import StarIcon from '@/shared/assets/icons/star.svg';

import cls from './StarRating.module.scss';

type TStarRatingProps = {
    onSelect?: (starCount: number) => void;
    size?: number;
    selectedStars?: number;

    className?: string;
};

const stars = [1, 2, 3, 4, 5];

/**
 * Устарел, используем новые компоненты из директории redesigned
 * @deprecated
 */
export const StarRating = memo((props: TStarRatingProps) => {
    const { className, onSelect, selectedStars = 0, size } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const handleHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };
    const handleLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };
    const handleClickStar = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <HStack gap="8" className={classNames(cls.StarRating, {}, [className])}>
            {stars.map(star => (
                <Icon
                    key={star}
                    Svg={StarIcon}
                    className={classNames(
                        cls.starIcon,
                        {
                            [cls.normal]: currentStarsCount < star,
                            [cls.hovered]: currentStarsCount >= star,
                            [cls.selected]: isSelected,
                        },
                        []
                    )}
                    width={size}
                    height={size}
                    onMouseEnter={handleHover(star)}
                    onMouseLeave={handleLeave}
                    onClick={handleClickStar(star)}
                    data-testid={`StarRating.${star}`}
                    data-selected={currentStarsCount >= star}
                />
            ))}
        </HStack>
    );
});
