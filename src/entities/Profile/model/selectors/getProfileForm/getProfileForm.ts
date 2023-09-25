import { StateSchema } from 'shared/providers/store-provider';

export const getProfileForm = (state: StateSchema) => state.profile?.form ?? undefined;
