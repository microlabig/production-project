import { StateSchema } from '@/shared/providers/store-provider';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
