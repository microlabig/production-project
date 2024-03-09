import { StateSchema } from '@/shared/providers/store-provider';

export const getRegistrationPassword = (state: StateSchema) => state.registrationForm?.password ?? '';
