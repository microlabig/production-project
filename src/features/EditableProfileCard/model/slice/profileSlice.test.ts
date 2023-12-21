import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/editableProfileCardSchema';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test setReadOnly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: undefined,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))).toEqual({
            readonly: true,
        });
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            form: { ...data, first: '', country: undefined },
            data,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_COUNTRY],
        };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            form: data,
            data,
            validateErrors: undefined,
        });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { ...data, country: undefined },
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfile({ currency: Currency.EUR }))
        ).toEqual({
            form: { ...data, country: undefined, currency: Currency.EUR },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.INCORRECT_COUNTRY],
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });
});
