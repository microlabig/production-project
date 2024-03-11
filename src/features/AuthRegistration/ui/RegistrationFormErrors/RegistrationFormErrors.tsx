import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DEBOUNCED_DELAY } from '@/shared/constants/constants';
import { useDebounceValue } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { Text, TextTheme } from '@/shared/ui/Text';
import { getRegistrationError } from '../../model/selectors/getRegistrationError/getRegistrationError';
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword/getRegistrationPassword';
import { getRegistrationReqPassword } from '../../model/selectors/getRegistrationReqPassword/getRegistrationReqPassword';

export const RegistrationFormErrors = () => {
    const { t } = useTranslation();

    const password = useSelector(getRegistrationPassword);
    const reqPassword = useSelector(getRegistrationReqPassword);
    const error = useSelector(getRegistrationError);

    const debouncedPassword = useDebounceValue(password, DEBOUNCED_DELAY);
    const debouncedReqPassword = useDebounceValue(reqPassword, DEBOUNCED_DELAY);

    const isPasswordsMatched = debouncedPassword === debouncedReqPassword;

    return (
        <>
            {error && <Text theme={TextTheme.ERROR} text={t('Пользователь с таким именем уже существует')} />}
            {!isPasswordsMatched && <Text theme={TextTheme.ERROR} text={t('Пароли не совпадают')} />}
        </>
    );
};
