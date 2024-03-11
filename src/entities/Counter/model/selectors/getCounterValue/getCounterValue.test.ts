import { StateSchema } from '@/app/providers/StoreProvider';

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
