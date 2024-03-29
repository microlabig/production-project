import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { getRouteProfile } from '@/shared/constants/router';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'auth/loginByUsername',
    async (data, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/login', data);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            extra.navigate?.(getRouteProfile(response.data.id));

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
