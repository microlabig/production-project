import { StateSchema } from '@/shared/providers/store-provider';

export const getRegistrationIsLoading = (state: StateSchema) => state.registrationForm?.isLoading ?? false;
