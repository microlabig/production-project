import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123',
        };

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123456'))).toEqual({ username: '123456' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: 'pass',
        };

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('secret'))).toEqual({ password: 'secret' });
    });

    // test('test set isLoading', () => {
    //     const state: DeepPartial<LoginSchema> = {
    //         isLoading: false,
    //     };

    //     expect(loginReducer(state as LoginSchema, loginByUsername.pending)).toEqual({ isLoading: true });
    //     expect(loginReducer(state as LoginSchema, loginByUsername.fulfilled)).toEqual({ isLoading: false });
    //     expect(loginReducer(state as LoginSchema, loginByUsername.rejected)).toEqual({ isLoading: false });
    // });
});
