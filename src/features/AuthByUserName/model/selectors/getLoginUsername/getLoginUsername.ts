import { StateSchema } from 'shared/providers/store-provider';

export const getLoginUsername = (state: StateSchema) => state.loginForm?.username ?? '';
