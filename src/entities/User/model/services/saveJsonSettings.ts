import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { JsonSettings } from '../types/jsonSettings';

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
    'user/saveJsonSettings',
    async (newJsonSettings, thunkAPI) => {
        const { rejectWithValue, getState, dispatch } = thunkAPI;
        const state = getState();
        const userData = getUserAuthData(state);
        const currentSettings = getJsonSettings(state);

        if (!userData) {
            return rejectWithValue('No user data');
        }

        try {
            const response = await dispatch(
                setJsonSettingsMutation({
                    userId: userData.id,
                    jsonSettings: {
                        ...currentSettings,
                        ...newJsonSettings,
                    },
                })
            ).unwrap();

            if (!response.jsonSettings) {
                throw new Error('No settings');
            }

            return response.jsonSettings;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
