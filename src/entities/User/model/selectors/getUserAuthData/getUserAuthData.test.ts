import { StateSchema } from '@/app/providers/StoreProvider';

import { getUserAuthData } from './getUserAuthData';
import { User } from '../../types/userSchema';

describe('getUserAuthData.test', () => {
    test('should return data', () => {
        const data: User = {
            id: '1',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: data,
            },
        };

        expect(getUserAuthData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
    });
});
