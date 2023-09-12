import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

type TStoreProviderProps = {
    children: ReactNode;
    initialState?: StateSchema;
};

export function StoreProvider(props: TStoreProviderProps) {
    const store = createReduxStore(props.initialState);

    return <Provider store={store}>{props.children}</Provider>;
}
