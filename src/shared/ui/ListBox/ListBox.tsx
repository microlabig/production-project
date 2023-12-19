import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';
import { Text } from '../Text/Text';
import { HStack } from '../Stack';

type DropDownDirection = 'top' | 'bottom'; // но лучше использовать библиотеку floating ui, popper js, Tippy.js либо аналагичные

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface TListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    value?: T;
    defaultValue?: string;
    onChange?: (value: T) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropDownDirection;

    className?: string;
}

export const ListBox = <T extends string>(props: TListBoxProps<T>) => {
    const { items, value, defaultValue, className, onChange, readonly, label, direction = 'bottom' } = props;

    const optionsAdditionalClasses = [cls[direction]];
    const selectedContent = items?.find(item => item.value === value ?? defaultValue)?.content;

    return (
        <HStack align="center" gap="4">
            {label && <Text text={`${label}>`} />}
            <HListBox
                as="div"
                disabled={readonly}
                value={value}
                onChange={onChange}
                className={classNames(cls.ListBox, {}, [className])}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>{selectedContent ?? ' - '}</Button>
                </HListBox.Button>

                <HListBox.Options className={classNames(cls.options, {}, optionsAdditionalClasses)}>
                    {items?.map(item => (
                        <HListBox.Option as={Fragment} key={item.value} value={item.value} disabled={item.disabled}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.selected]: selected,
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
