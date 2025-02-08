import { memo } from 'react';

import { ScrollToTopButton } from '@/features/ScrollToTopButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ScrollToolbar.module.scss';

type TScrollToolbarProps = {
    className?: string;
};

export const ScrollToolbar = memo((props: TScrollToolbarProps) => {
    const { className } = props;

    return (
        <VStack justify="center" align="center" className={classNames(cls.ScrollToolbar, {}, [className])}>
            <ScrollToTopButton />
        </VStack>
    );
});
