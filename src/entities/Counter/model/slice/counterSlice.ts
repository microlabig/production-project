import { PayloadAction } from '@reduxjs/toolkit';

import { buildSlice } from '@/shared/lib/store';
import { CounterSchema } from '../types/counterShema';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        add: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        decrement: state => {
            state.value -= 1;
        },
    },
});

export const { actions: counterActions, reducer: counterReducer, useActions: useCounterActions } = counterSlice;
