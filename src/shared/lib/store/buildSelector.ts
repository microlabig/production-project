/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';

import { StateSchema } from '@/app/providers/StoreProvider';

type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

// упрощает работу со стэйтом, см. 105,
// можно использовать в компоненте хук, который формирует данная функция, без useSelector
// см. пример в <Counter />
export function buildSelector<T, Args extends any[]>(selector: Selector<T, Args>): Result<T, Args> {
    const useSelectorHook: Hook<T, Args> = (...args: Args) => {
        return useSelector((state: StateSchema) => selector(state, ...args));
    };

    return [useSelectorHook, selector];
}
