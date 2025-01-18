import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 'm' | 'l' | 's';

type TTextProps = {
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;

    className?: string;

    'data-testid'?: string;
};

type THeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, THeaderTag> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

export const Text = memo((props: TTextProps) => {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'm',
        bold,
        'data-testid': dataTestId = '',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const additionalClasses = [className, cls[variant], cls[align], cls[size]];

    return (
        <div className={classNames(cls.Text, { [cls.bold]: bold }, additionalClasses)}>
            {title && (
                <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});
