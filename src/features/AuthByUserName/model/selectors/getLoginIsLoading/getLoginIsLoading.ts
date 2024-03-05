import { StateSchema } from '@/shared/providers/store-provider';

export const getLoginIsLoading = (state: StateSchema) => state.loginForm?.isLoading ?? false;
