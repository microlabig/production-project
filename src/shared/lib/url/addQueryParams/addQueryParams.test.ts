import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });

        expect(params).toBe(`?test=value`);
    });

    test('test with multiple params', () => {
        const params = getQueryParams({
            test1: 'value1',
            test2: 'value2',
        });

        expect(params).toBe(`?test1=value1&test2=value2`);
    });

    test('test with undefined', () => {
        const params = getQueryParams({
            test1: 'value1',
            test2: undefined,
        });

        expect(params).toBe(`?test1=value1`);
    });

    test('test with no param', () => {
        const params = getQueryParams({});

        expect(params).toBe(``);
    });
});
