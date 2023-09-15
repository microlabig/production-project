import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

type TTextProps = {
    title?: string;
    text?: string;
    theme?: TextTheme;

    className?: string;
};

export const Text = (props: TTextProps) => {
    const { title, text, theme = TextTheme.PRIMARY } = props;

    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [props.className])}>
            {props.title && <p className={cls.title}>{title}</p>}
            {props.text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
