import { Fragment, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

type TInputProps = HTMLInputProps & {
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;

    className?: string;
};

export const Input = memo((props: TInputProps) => {
    const { value, onChange, className, type = 'text', placeholder, autofocus, readonly, ...otherProps } = props;

    const [isFocused, setIsFocused] = useState(false);

    const [caretPosition, setCaretPosition] = useState(0);
    const [selectionStart, setSelectionStart] = useState(value?.toString().length ?? 0); // старт номера символа выделенного значения в инпуте
    const inputFakeRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputValue = inputRef.current?.value; // используется для каретки (определяет )

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        const pos = inputFakeRef.current?.getBoundingClientRect().width ?? 0;

        setCaretPosition(pos);
    }, [value, selectionStart]);

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

    const handleBlur = () => setIsFocused(false);
    const handleFocus = () => setIsFocused(true);

    const handleSelect = (e: unknown) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setSelectionStart(e?.target?.selectionStart ?? 0);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.wrapper, mods, [props.className])}>
            {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}

            <div className={cls.inputWrapper}>
                <input
                    {...otherProps}
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onSelect={handleSelect}
                    readOnly={readonly}
                    className={cls.input}
                />
                {isCaretVisible && (
                    <>
                        <span className={cls.caret} style={{ left: `${caretPosition}px` }} />
                        <span className={classNames(cls.input, {}, [cls.inputValueFake])} ref={inputFakeRef}>
                            {inputValue?.slice(0, selectionStart)}
                        </span>
                    </>
                )}
            </div>
        </div>
    );
});
