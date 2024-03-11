import { StoryFn } from '@storybook/react';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { loginReducer } from '@/features/AuthByUserName/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { registrationReducer } from '@/features/AuthRegistration/testing';

const defaultAsyncReducers: ReducersList = {
    registrationForm: registrationReducer,
    loginForm: loginReducer,
    profile: profileReducer,
    addCommentForm: addCommentFormReducer,
    articlesPage: articlesPageReducer,

    articleDetailsPage: articleDetailsPageReducer,
    articleDetails: articleDetailsReducer,
};

export const StoreDecorator =
    (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: StoryFn) =>
        (
            <StoreProvider
                initialState={initialState as StateSchema}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
