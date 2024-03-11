import { Reducer } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from '@/app/providers/StoreProvider';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer; // Reducer<NonNullable<StateSchema[name]>>;
};

type TDynamicModuleLoaderProps = {
    reducers: ReducersList;
    children?: ReactNode;
    removeAfterUnmount?: boolean; // признак того, что удалять ли редьюсер после демонтирования
};

export const DynamicModuleLoader = (props: TDynamicModuleLoaderProps) => {
    const dispatch = useAppDispatch();

    const { reducers, children, removeAfterUnmount = true } = props;

    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const isMounted = !!mountedReducers[name as StateSchemaKey];

            if (!isMounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
