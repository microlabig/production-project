import { StateSchema } from '@/shared/providers/store-provider';

export const getProfileData = (state: StateSchema) => state.profile?.data;
