import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
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

            if (!response.jsonSettings) {
                throw new Error('No settings');
            }

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
