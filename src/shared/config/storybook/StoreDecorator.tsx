import { StoryFn } from '@storybook/react';
import { articleDetailsReducer } from 'entities/Article';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/AddCommentForm';
import { loginReducer } from 'features/AuthByUserName';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage';
import { articlesPageReducer } from 'pages/ArticlesPage';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { StateSchema, StoreProvider } from 'shared/providers/store-provider';

const defaultAsyncReducers: ReducersList = {
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
