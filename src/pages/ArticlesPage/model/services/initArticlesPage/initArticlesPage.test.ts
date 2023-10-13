import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';

jest.mock('entities/Article', () => ({
    // https://stackoverflow.com/questions/76356354/how-do-i-mock-a-typescript-enum-in-my-jest-unit-tests
    ArticleView: {},
    ArticleSortField: {},
    ArticleType: {},
}));

describe('initArticlesPage.test', () => {
    test('success', () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
            },
        });
        const searchParams = new URLSearchParams();

        thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(3); // dispatch of fulfilled thunk, initState, fetchArticlesList actions
    });

    test('initArticlesPage not called', () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        });
        const searchParams = new URLSearchParams();

        thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(1); // dispatch of fulfilled thunk
    });
});
