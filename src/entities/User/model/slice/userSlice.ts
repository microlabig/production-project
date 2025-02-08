import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LAST_DESIGN_LOCAL_STORAGE_KEY, USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { initAuthData } from '../services/initAuthData';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { User, UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, { payload }: PayloadAction<User>) => {
            state.authData = payload;
            setFeatureFlags(payload.features);

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, payload.id);
            localStorage.setItem(LAST_DESIGN_LOCAL_STORAGE_KEY, payload.features?.isAppRedesigned ? 'new' : 'old');
        },
        logout: state => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
    extraReducers: builder => {
        // Save Json settings
        builder.addCase(saveJsonSettings.fulfilled, (state, { payload }: PayloadAction<JsonSettings>) => {
            if (state.authData) {
                state.authData.jsonSettings = payload;
            }
        });

        // Get user data by Id
        builder.addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
            state.authData = payload;
            setFeatureFlags(payload.features);
            state._inited = true;
        });
        builder.addCase(initAuthData.rejected, state => {
            state._inited = true;
        });
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
