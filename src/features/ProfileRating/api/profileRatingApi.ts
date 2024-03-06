import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetProfileRatingArg {
    userId: string;
    profileId: string;
}
interface RateProfileArg extends GetProfileRatingArg {
    rate: number;
    feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        getProfileRating: build.query<Rating[], GetProfileRatingArg>({
            query: ({ userId, profileId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId,
                },
            }),
        }),
        rateProfile: build.mutation<Rating[], RateProfileArg>({
            query: args => ({
                url: '/profile-ratings',
                method: 'POST',
                body: args,
            }),
        }),
    }),
    overrideExisting: false,
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useRateProfile = profileRatingApi.useRateProfileMutation;
