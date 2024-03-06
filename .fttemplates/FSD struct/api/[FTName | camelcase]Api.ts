import { rtkApi } from '@/shared/api/rtkApi';

const [FTName | camelcase]Api = rtkApi.injectEndpoints({
    endpoints: build => ({
        get[FTName]: build.query<[FTName], number>({
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

export const useGet[FTName] = [FTName | camelcase]Api.useGet[FTName]Query;
