import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/providers/store-provider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'pass',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('pass');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
