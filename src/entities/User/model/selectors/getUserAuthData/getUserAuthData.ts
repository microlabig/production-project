import { StateSchema } from 'shared/providers/store-provider';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
