import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { User, UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
        },
        initAuthData: state => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

            if (user) {
                try {
                    const json = JSON.parse(user) as User;

                    state.authData = JSON.parse(user);
                    setFeatureFlags(json.features);
                } catch (error) {
                    console.error(error);
                }
            }

            state._inited = true;
        },
        logout: state => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
