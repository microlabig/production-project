import { Fragment, ReactNode, forwardRef, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Menu } from '@headlessui/react';
import { DropDownDirection } from 'shared/types/ui';
import { AppLink, TAppLinkProps } from '../AppLink/AppLink';
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

const mapDirectionClasses: Record<DropDownDirection, string> = {
    'bottom left': cls.menuBottomLeft,
    'bottom right': cls.menuBottomRight,
    'top left': cls.menuTopLeft,
    'top right': cls.menuTopRight,
};

// чтобы убрать варнинг "Warning: validateDOMNesting(...): <button> cannot appear as a descendant of <button>"
const DropdownLink = forwardRef<HTMLDivElement, TAppLinkProps>((props, ref) => (
    <div ref={ref}>
        <AppLink {...props} />
    </div>
));

export const Dropdown = memo((props: TDropdownProps) => {
    const { className, items, trigger, direction = 'bottom right' } = props;
    const itemsAdditionalClasses = [mapDirectionClasses[direction]];

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>

            <Menu.Items className={classNames(cls.menu, {}, itemsAdditionalClasses)}>
                {items?.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(
                                cls.item,
                                { [cls.active]: active, [cls.disabled]: item.disabled },
                                []
                            )}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
                                <DropdownLink to={item.href}>{content}</DropdownLink>
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});