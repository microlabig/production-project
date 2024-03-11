import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { registration } from '../services/registration/registration';
import { RegistrationSchema } from '../types/registrationSchema';

const initialState: RegistrationSchema = {
    username: '',
    password: '',
    reqPassword: '',

    isLoading: false,
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setReqPassword: (state, action: PayloadAction<string>) => {
            state.reqPassword = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(registration.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registration.fulfilled, state => {
                state.isLoading = false;
            })
            .addCase(registration.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: registrationActions, reducer: registrationReducer } = registrationSlice;
