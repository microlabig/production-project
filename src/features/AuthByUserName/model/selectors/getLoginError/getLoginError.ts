import { StateSchema } from 'shared/providers/store-provider';

export const getLoginError = (state: StateSchema) => state.loginForm?.error ?? undefined;
