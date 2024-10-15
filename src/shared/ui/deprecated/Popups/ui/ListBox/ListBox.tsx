import { forwardRef, Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import { Button, TButtonProps } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { Text } from '../../../Text/Text';
import { mapDirectionClasses } from '../../styles/constants';

import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

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

// чтобы убрать варнинг "Warning: validateDOMNesting(...): <button> cannot appear as a descendant of <button>"
const ListBoxButton = forwardRef<HTMLDivElement, TButtonProps>((props, ref) => (
    <div ref={ref}>
        <Button {...props} />
    </div>
));

/**
 * Устарел, используем новые компоненты из директории redesigned
 * @deprecated
 */
export const ListBox = <T extends string>(props: TListBoxProps<T>) => {
    const { items, value, defaultValue, className, onChange, readonly, label, direction = 'bottom right' } = props;
    const optionsAdditionalClasses = [mapDirectionClasses[direction]];
    const selectedContent = items?.find(item => item.value === (value ?? defaultValue))?.content;

    return (
        <HStack align="center" gap="4">
            {label && <Text text={`${label}>`} />}
            <HListBox
                as="div"
                disabled={readonly}
                value={value}
                onChange={onChange}
                className={classNames(popupCls.popup, {}, [className])}
            >
                <HListBox.Button as={Fragment}>
                    <ListBoxButton disabled={readonly}>{selectedContent ?? ' - '}</ListBoxButton>
                </HListBox.Button>

                <HListBox.Options className={classNames(cls.options, {}, optionsAdditionalClasses)}>
                    {items?.map(item => (
                        <HListBox.Option as={Fragment} key={item.value} value={item.value} disabled={item.disabled}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.selected]: selected,
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
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
