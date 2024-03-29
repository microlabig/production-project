import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { [FTName]Schema } from '../types/[FTName | camelcase]Schema';

const initialState: [FTName]Schema = {
    isLoading: false,
};

export const [FTName | camelcase]Slice = createSlice({
    name: '[FTName | camelcase]',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const {
    actions: [FTName | camelcase]Actions,
    reducer: [FTName | camelcase]Reducer
} = [FTName | camelcase]Slice;
