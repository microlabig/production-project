import { StateSchema } from '@/shared/providers/store-provider';

export const getRegistrationUsername = (state: StateSchema) => state.registrationForm?.username ?? '';
