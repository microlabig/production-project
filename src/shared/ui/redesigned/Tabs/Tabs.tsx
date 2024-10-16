import { ReactNode, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

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

    direction?: FlexDirection;
};

export const Tabs = <T extends string>(props: TTabsProps<T>) => {
    const { className, tabs, value, onTabClick, dataTestId, direction = 'row' } = props;

    const handleClick = useCallback(
        (newTab: TabItem<T>) => {
            return () => {
                onTabClick(newTab);
            };
        },
        [onTabClick]
    );

    return (
        <Flex
            gap="8"
            direction={direction}
            align="start"
            className={classNames(cls.Tabs, {}, [className])}
            data-testid={dataTestId}
        >
            {tabs.map(tab => {
                const isSelected = value === tab.value;

                return (
                    <Card
                        key={tab.value}
                        className={classNames(
                            cls.tab,
                            {
                                [cls.selected]: isSelected,
                            },
                            []
                        )}
                        variant={isSelected ? 'light' : 'normal'}
                        onClick={handleClick(tab)}
                        data-testid={`${dataTestId}.Tab.${tab.content}`}
                        border="round"
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
};
