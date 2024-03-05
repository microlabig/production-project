import { memo, useCallback } from 'react';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import { copyTextToClipboard } from '@/shared/lib/copyTextToClipboard/copyTextToClipboard';
import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import cls from './Code.module.scss';

type TCodeProps = {
    text: string;

    className?: string;
};

export const Code = memo((props: TCodeProps) => {
    const { className, text } = props;

    const handleClick = useCallback(() => {
        copyTextToClipboard(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} className={cls.copyBtn} onClick={handleClick}>
                <Icon Svg={CopyIcon} className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
