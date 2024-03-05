import { StateSchema } from '@/shared/providers/store-provider';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
