import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'shared/providers/store-provider';
import { Profile } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get('/profile');

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
