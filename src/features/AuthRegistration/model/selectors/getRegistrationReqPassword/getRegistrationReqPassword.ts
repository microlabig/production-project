import { StateSchema } from '@/shared/providers/store-provider';

export const getRegistrationReqPassword = (state: StateSchema) => state.registrationForm?.reqPassword ?? '';
