import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import { mapDirectionClasses } from '../../styles/constants';

import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

type TPopoverProps = {
    trigger: ReactNode;
    direction?: DropDownDirection;
    children: ReactNode;

    className?: string;
};

/**
 * Устарел, используем новые компоненты из директории redesigned
 * @deprecated
 */
export const Popover = memo((props: TPopoverProps) => {
    const { className, trigger, direction = 'bottom right', children } = props;

    const itemsAdditionalClasses = [mapDirectionClasses[direction]];

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, itemsAdditionalClasses)}>{children}</HPopover.Panel>
        </HPopover>
    );
});
