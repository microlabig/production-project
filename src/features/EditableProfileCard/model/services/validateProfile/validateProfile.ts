import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../constants/constants';

export function validateProfile(profile?: Profile) {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const errors: ValidateProfileError[] = [];

    const { first, lastname, age, country } = profile;

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age) || age <= 0) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
}
