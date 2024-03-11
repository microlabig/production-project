import type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
    StateSchemaKey,
    ReducerManager,
} from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider, StoreWrapperProvider } from './ui/StoreProvider';

export { StoreProvider, StoreWrapperProvider, createReduxStore, StateSchema, ReduxStoreWithManager, ThunkConfig };

export type { AppDispatch, StateSchemaKey, ReducerManager };
