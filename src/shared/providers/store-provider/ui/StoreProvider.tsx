import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

type TStoreProviderProps = {
    children: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
};

export function StoreProvider(props: TStoreProviderProps) {
    const { children, initialState, asyncReducers } = props;

    const navigate = useNavigate();
    const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<StateSchema>, navigate);

    return <Provider store={store}>{children}</Provider>;
}
