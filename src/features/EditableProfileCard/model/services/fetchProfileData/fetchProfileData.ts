import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { ThunkConfig } from '@/shared/providers/store-provider';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (userId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>(`/profile/${userId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
