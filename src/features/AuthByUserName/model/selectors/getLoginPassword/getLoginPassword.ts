import { StateSchema } from '@/shared/providers/store-provider';

export const getLoginPassword = (state: StateSchema) => state.loginForm?.password ?? '';
