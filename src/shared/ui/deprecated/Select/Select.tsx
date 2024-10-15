import { useMemo } from 'react';

import { typedMemo } from '@/shared/constants/constants';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

type TSelectProps<T extends string> = {
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;

    className?: string;
};

/**
 * Устарел, используем новые компоненты из директории redesigned
 * @deprecated
 */
export const Select = typedMemo(<T extends string>(props: TSelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props;

    const optionsList = useMemo(
        () =>
            options?.map(opt => (
                <option key={opt.value} value={opt.value} className={cls.option}>
                    {opt.content}
                </option>
            )),
        [options]
    );

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}> `}</span>}

            <select disabled={readonly} className={cls.select} value={value} onChange={handleChange}>
                {optionsList}
            </select>
        </div>
    );
});
