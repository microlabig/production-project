import { StateSchema } from 'shared/providers/store-provider';

export const getCounter = (state: StateSchema) => state.counter;
