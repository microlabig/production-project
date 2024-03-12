import type {
    ReducerManager,
    ReduxStoreWithManager,
    StateSchema,
    StateSchemaKey,
    ThunkConfig,
} from './config/StateSchema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider, StoreWrapperProvider } from './ui/StoreProvider';

export { StoreProvider, StoreWrapperProvider, createReduxStore, StateSchema, ReduxStoreWithManager, ThunkConfig };

export type { AppDispatch, StateSchemaKey, ReducerManager };
