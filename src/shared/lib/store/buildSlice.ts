import { useMemo } from 'react';
import { bindActionCreators, createSlice, CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// упрощает работу со стэйтом, см. 105,
// можно использовать в компоненте хук, который формирует данная функция, без useDispatch
// А экшен-креэйторы, которые получаем здесь можно использовать без dispatch
// см. пример в <Counter />
export function buildSlice<State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(
    options: CreateSliceOptions<State, CaseReducers, Name>
) {
    const slice = createSlice(options);
    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
        // bindActionCreators - возвращает функцию, которую можно использовать без dispatch
    };

    return {
        ...slice,
        useActions,
    };
}
