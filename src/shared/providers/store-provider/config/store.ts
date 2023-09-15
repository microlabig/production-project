import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName';
import type { StateSchema } from './StateSchema';

export function createReduxStore(preloadedState?: StateSchema) {
    const reducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer,
        devTools: __IS_DEV__,
        preloadedState,
    });
}
