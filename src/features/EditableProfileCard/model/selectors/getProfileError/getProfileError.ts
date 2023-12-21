import { StateSchema } from 'shared/providers/store-provider';

export const getProfileError = (state: StateSchema) => state.profile?.error;
