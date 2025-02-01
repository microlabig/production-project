import { rtkApi } from '@/shared/api/rtkApi';
import { FeaturesFlags } from '@/shared/types/features';

interface UpdateFeatureFlagsOptions {
    userId: string;
    features: Partial<FeaturesFlags>;
}

const featuresFlagsApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsOptions>({
            query: ({ userId, features }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features,
                },
            }),
        }),
    }),
});

export const updateFeatureFlagsMutation = featuresFlagsApi.endpoints.updateFeatureFlags.initiate;
