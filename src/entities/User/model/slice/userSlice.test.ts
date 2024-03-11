import { userActions, userReducer } from './userSlice';
import { User, UserSchema } from '../types/userSchema';

const data: User = {
    username: 'admin',
    id: '1',
};

describe('profileSlice.test', () => {
    test('test setAuthData', () => {
        const state: DeepPartial<UserSchema> = {
            _inited: false,
        };

        expect(userReducer(state as UserSchema, userActions.setAuthData(data))).toEqual({
            _inited: false,
            authData: data,
        });
    });

    test('test initAuthData', () => {
        const state: DeepPartial<UserSchema> = {};

        expect(userReducer(state as UserSchema, userActions.initAuthData())).toEqual({
            _inited: true,
        });
    });

    test('test logout', () => {
        const state: DeepPartial<UserSchema> = {
            authData: data,
        };

        expect(userReducer(state as UserSchema, userActions.logout())).toEqual({});
    });
});
