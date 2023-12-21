import { rtkApi } from 'shared/api/rtkApi';

const [FTName | camelcase]Api = rtkApi.injectEndpoints({
    endpoints: build => ({
        get[FTName]: build.query({
            query: limit => ({
                url: '',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const use[FTName] = recommendationsApi.useGet[FTName]Query;
