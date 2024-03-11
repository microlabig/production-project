import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserRole, userActions } from '@/entities/User';
import { RoutePath } from '@/shared/constants/router';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { DEFAULT_USER_AVATAR } from '@/shared/constants/constants';

interface RegistrationProps {
    username: string;
    password: string;
}

export const registration = createAsyncThunk<User, RegistrationProps, ThunkConfig<string>>(
    'auth/registration',
    async (data, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            const checkUserResponse = await extra.api.get<{ existed: boolean }>(
                `/check-user?username=${data.username}`
            );

            if (checkUserResponse.data.existed) {
                // Если такой пользователь существует - выбросить ошибку
                throw new Error('Пользователь существует');
            }

            const response = await extra.api.post<User>('/register', {
                ...data,
                roles: [UserRole.USER],
                avatar: DEFAULT_USER_AVATAR,
            });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            extra.navigate?.(`${RoutePath.profile}/${response.data.id}`);

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
