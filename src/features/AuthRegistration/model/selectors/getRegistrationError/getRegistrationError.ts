import { StateSchema } from '@/shared/providers/store-provider';

export const getRegistrationError = (state: StateSchema) => state.registrationForm?.error ?? undefined;
