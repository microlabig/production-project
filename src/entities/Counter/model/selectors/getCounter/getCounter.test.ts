import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/providers/store-provider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        const counter = getCounter(state as StateSchema);

        expect(counter).toEqual({ value: 10 });
    });
});
