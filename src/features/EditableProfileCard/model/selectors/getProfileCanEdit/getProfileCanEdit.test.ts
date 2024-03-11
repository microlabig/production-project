import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileCanEdit } from './getProfileCanEdit';

describe('getProfileCanEdit.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    id: '1',
                },
            },
            user: {
                authData: {
                    id: '1',
                },
            },
        };

        expect(getProfileCanEdit(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileCanEdit(state as StateSchema)).toEqual(false);
    });
});
