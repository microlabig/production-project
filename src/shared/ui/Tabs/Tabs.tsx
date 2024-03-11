import { ReactNode, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Tabs.module.scss';

import { Card, CardTheme } from '../Card/Card';

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

type TTabsProps<T extends string> = {
    tabs: TabItem<T>[];
    value: string;

    onTabClick: (newTab: TabItem<T>) => void;

    className?: string;
};

export const Tabs = <T extends string>(props: TTabsProps<T>) => {
    const { className, tabs, value, onTabClick } = props;

    const handleClick = useCallback(
        (newTab: TabItem<T>) => {
            return () => {
                onTabClick(newTab);
            };
        },
        [onTabClick]
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    key={tab.value}
                    className={cls.tab}
                    theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    onClick={handleClick(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
