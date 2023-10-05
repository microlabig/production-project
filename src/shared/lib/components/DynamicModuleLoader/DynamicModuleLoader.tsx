import { Reducer } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReduxStoreWithManager } from 'shared/providers/store-provider';
import { StateSchemaKey } from 'shared/providers/store-provider/config/StateSchema';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
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
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
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
