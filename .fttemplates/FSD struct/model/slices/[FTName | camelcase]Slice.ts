import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { [FTName]Schema } from '../types/[FTName | camelcase]Schema';

const initialState: [FTName]Schema = {
    isLoading: false,
};

export const [FTName | camelcase]Slice = createSlice({
    name: '[FTName | camelcase]',
    initialState,
    reducers: {},
});

export const { actions: [FTName | camelcase]Actions, reducer: [FTName | camelcase]Reducer } = [FTName | camelcase]Slice;
