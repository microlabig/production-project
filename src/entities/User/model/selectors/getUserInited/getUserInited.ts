import { StateSchema } from 'shared/providers/store-provider';

export const getUserInited = (state: StateSchema) => state.user._inited;
