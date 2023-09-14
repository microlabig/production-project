import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import type { StateSchema } from './StateSchema';

export function createReduxStore(preloadedState?: StateSchema) {
    const reducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer,
        devTools: __IS_DEV__,
        preloadedState,
    });
}
