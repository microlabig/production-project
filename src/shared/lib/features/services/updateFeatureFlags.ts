import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeaturesFlags } from '@/shared/types/features';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags } from '../lib/setGetFeatures';

interface UpdateFeatureFlagOptions {
    userId: string;
    newFeatures: Partial<FeaturesFlags>;
}

export const updateFeatureFlag = createAsyncThunk<void, UpdateFeatureFlagOptions, ThunkConfig<string>>(
    'user/saveJsonSettings',
    async ({ userId, newFeatures }, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        try {
            await dispatch(
                updateFeatureFlagsMutation({
                    userId,
                    features: {
                        ...getAllFeatureFlags(),
                        ...newFeatures,
                    },
                })
            );

            window.location.reload();
            return undefined;
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            return rejectWithValue('');
        }
    }
);
