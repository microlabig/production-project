import { StateSchema } from 'shared/providers/store-provider';
import { User } from '../../types/userSchema';
import { getUserAuthData } from './getUserAuthData';

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
