import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { StateSchema, StoreProvider } from 'shared/providers/store-provider';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator =
    (initialState: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) =>
    (Story: StoryFn) =>
        (
            <StoreProvider
                initialState={initialState as StateSchema}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <div className="app">
                    <Story />
                </div>
            </StoreProvider>
        );
