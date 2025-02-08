import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';

import CircleIcon from '@/shared/assets/icons/circle_up.svg';

type TScrollToTopButtonProps = {
    className?: string;
};

export const ScrollToTopButton = memo((props: TScrollToTopButtonProps) => {
    const { className } = props;

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Icon
            Svg={CircleIcon}
            width={32}
            height={32}
            clickable
            onClick={handleClick}
            className={classNames('', {}, [className])}
        />
    );
});
