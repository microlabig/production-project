import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'shared/providers/store-provider';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (Story: StoryFn) =>
    (
        <StoreProvider initialState={initialState as StateSchema}>
            <div className="app">
                <Story />
            </div>
        </StoreProvider>
    );
