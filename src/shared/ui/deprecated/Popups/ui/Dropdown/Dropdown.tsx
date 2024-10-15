import { forwardRef, Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import { AppLink, TAppLinkProps } from '../../../AppLink/AppLink';
import { mapDirectionClasses } from '../../styles/constants';

import popupCls from '../../styles/popup.module.scss';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

type TDropdownProps = {
    items?: DropdownItem[];
    trigger: ReactNode;
    direction?: DropDownDirection;

    className?: string;
};

// чтобы убрать варнинг "Warning: validateDOMNesting(...): <button> cannot appear as a descendant of <button>"
const DropdownLink = forwardRef<HTMLDivElement, TAppLinkProps>((props, ref) => (
    <div ref={ref}>
        <AppLink {...props} />
    </div>
));

/**
 * Устарел, используем новые компоненты из директории redesigned
 * @deprecated
 */
export const Dropdown = memo((props: TDropdownProps) => {
    const { className, items, trigger, direction = 'bottom right' } = props;
    const itemsAdditionalClasses = [mapDirectionClasses[direction]];

    return (
        <Menu as="div" className={classNames(cls.DropDown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>

            <Menu.Items className={classNames(cls.menu, {}, [...itemsAdditionalClasses, popupCls.options])}>
                {items?.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(
                                cls.item,
                                { [popupCls.active]: active, [cls.disabled]: item.disabled },
                                []
                            )}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
                                {({ active }) => <DropdownLink to={item.href!}>{content({ active })}</DropdownLink>}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
                            {({ active }) => content({ active })}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
