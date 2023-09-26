import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfile } from './validateProfile';
import { ValidateProfileError } from '../../types/profileSchema';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('validateProfile.test', () => {
    test('success', () => {
        const result = validateProfile(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', () => {
        const result = validateProfile({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('without age', () => {
        const result = validateProfile({ ...data, age: NaN });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('without country', () => {
        const result = validateProfile({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('without profile', () => {
        const result = validateProfile();

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });

    test('without all', () => {
        const result = validateProfile({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('without first name and age', () => {
        const result = validateProfile({ ...data, first: undefined, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE]);
    });
});
