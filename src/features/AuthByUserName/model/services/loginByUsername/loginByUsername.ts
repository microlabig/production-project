import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/constants';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';
import { ThunkConfig } from 'shared/providers/store-provider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (data, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/login', data);

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
