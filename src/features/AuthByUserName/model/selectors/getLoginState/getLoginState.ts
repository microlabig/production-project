import { StateSchema } from 'shared/providers/store-provider';

export const getLoginState = (state: StateSchema) => state.loginForm;
