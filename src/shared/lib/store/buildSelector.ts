import { useSelector } from 'react-redux';

import { StateSchema } from '@/app/providers/StoreProvider';

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>];

// упрощает работу со стэйтом, см. 105,
// можно использовать в компоненте хук, который формирует данная функция, без useSelector
// см. пример в <Counter />
export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectorHook = () => {
        return useSelector(selector);
    };

    return [useSelectorHook, selector];
}
