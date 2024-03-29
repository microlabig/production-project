import { createContext, ReactNode, useContext, useMemo, useRef } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

const StoreWrapperContext = createContext<NavigateFunction | (() => void)>(() => false);

export const StoreWrapperProvider = ({ children }: { children: ReactNode }) => {
    const navigateFn = useNavigate();
    const navigateRef = useRef(navigateFn);

    const navigate = useMemo(() => navigateRef.current, []);

    return <StoreWrapperContext.Provider value={navigate}>{children}</StoreWrapperContext.Provider>;
};

type TStoreProviderProps = {
    children: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: ReducersList; // DeepPartial<ReducersMapObject<StateSchema>>;
};

export function StoreProvider(props: TStoreProviderProps) {
    const { children, initialState, asyncReducers } = props;

    const navigate = useContext(StoreWrapperContext);
    const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<StateSchema>, navigate);

    return <Provider store={store}>{children}</Provider>;
}
