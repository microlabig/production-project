import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationReqPassword = (state: StateSchema) => state.registrationForm?.reqPassword ?? '';
