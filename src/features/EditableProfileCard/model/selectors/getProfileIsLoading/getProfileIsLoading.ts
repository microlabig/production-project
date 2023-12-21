import { StateSchema } from 'shared/providers/store-provider';

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
