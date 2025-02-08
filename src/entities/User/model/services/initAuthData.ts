import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { LAST_DESIGN_LOCAL_STORAGE_KEY, USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/userSchema';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
        const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

        if (!userId) {
            return rejectWithValue('No user ID');
        }

        try {
            const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

            localStorage.setItem(LAST_DESIGN_LOCAL_STORAGE_KEY, response.features?.isAppRedesigned ? 'new' : 'old');

            if (!response.jsonSettings) {
                throw new Error('No settings');
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
