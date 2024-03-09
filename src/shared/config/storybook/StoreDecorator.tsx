import { StoryFn } from '@storybook/react';
import { articleDetailsReducer } from '@/entities/Article';
import { addCommentFormReducer } from '@/features/AddCommentForm';
import { loginReducer } from '@/features/AuthByUserName';
import { profileReducer } from '@/features/EditableProfileCard';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { articlesPageReducer } from '@/pages/ArticlesPage';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { StateSchema, StoreProvider } from '@/shared/providers/store-provider';
import { registrationReducer } from '@/features/AuthRegistration';

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
