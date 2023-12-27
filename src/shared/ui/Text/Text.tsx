import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

type TTextProps = {
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;

    className?: string;

    'data-testid'?: string;
};

type THeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, THeaderTag> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TTextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = '',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const classes = [className, cls[theme], cls[align], cls[size]];

    return (
        <div className={classNames(cls.Text, {}, classes)}>
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
