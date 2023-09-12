import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/providers/store-provider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('should return a value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        const value = getCounterValue(state as StateSchema);

        expect(value).toEqual(10);
    });
});
