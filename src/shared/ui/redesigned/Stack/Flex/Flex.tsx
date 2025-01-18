import { DetailedHTMLProps, HTMLAttributes, memo, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'wrap' | 'nowrap';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};
const gapClasses: Record<FlexGap, string> = {
    '4': cls.gap4,
    '8': cls.gap8,
    '16': cls.gap16,
    '24': cls.gap24,
    '32': cls.gap32,
};

type DivProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

export type TFlexProps = DivProps & {
    children: ReactNode;

    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    wrap?: FlexWrap;
    gap?: FlexGap;

    max?: boolean;

    className?: string;
};

export const Flex = memo((props: TFlexProps) => {
    const {
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        wrap = 'nowrap',
        gap,
        max,
        className,
        ...rest
    } = props;

    const mods: Mods = {
        [cls.max]: max,
    };
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        wrap && cls[wrap],
        gap && gapClasses[gap],
    ];

    return (
        <div {...rest} className={classNames(cls.Flex, mods, classes)}>
            {children}
        </div>
    );
});
