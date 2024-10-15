import { ReactNode, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';

import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

type TTabsProps<T extends string> = {
    tabs: TabItem<T>[];
    value: string;

    onTabClick: (newTab: TabItem<T>) => void;

    className?: string;
    dataTestId?: string;
};

/**
 * Устарел, используем новые компоненты из директории redesigned
 * @deprecated
 */
export const Tabs = <T extends string>(props: TTabsProps<T>) => {
    const { className, tabs, value, onTabClick, dataTestId } = props;

    const handleClick = useCallback(
        (newTab: TabItem<T>) => {
            return () => {
                onTabClick(newTab);
            };
        },
        [onTabClick]
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])} data-testid={dataTestId}>
            {tabs.map(tab => (
                <Card
                    key={tab.value}
                    className={cls.tab}
                    theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    onClick={handleClick(tab)}
                    data-testid={`${dataTestId}.Tab.${tab.content}`}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
