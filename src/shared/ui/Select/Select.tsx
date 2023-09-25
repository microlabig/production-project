import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

type TSelectProps = {
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;

    className?: string;
};

export const Select = memo((props: TSelectProps) => {
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
        onChange?.(e.target.value);
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
