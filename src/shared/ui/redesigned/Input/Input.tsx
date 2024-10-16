import { InputHTMLAttributes, memo, ReactNode, useEffect, useRef, useState } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

type TInputProps = HTMLInputProps & {
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;

    className?: string;
};

export const Input = memo((props: TInputProps) => {
    const {
        value,
        onChange,
        className,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autofocus]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        onChange?.(newValue);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    return (
        <div className={classNames(cls.wrapper, mods, [props.className])}>
            <div className={cls.addonLeft}>{addonLeft}</div>
            <input
                {...otherProps}
                ref={inputRef}
                type={type}
                value={value}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readonly}
                className={cls.input}
                placeholder={placeholder}
            />
            <div className={cls.addonRight}>{addonRight}</div>
        </div>
    );
});
