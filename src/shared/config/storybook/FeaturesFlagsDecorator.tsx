import { StoryFn } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/features';
import { FeaturesFlags } from '@/shared/types/features';

export const FeaturesFlagsDecorator = (features: FeaturesFlags) => (Story: StoryFn) => {
    setFeatureFlags(features);

    return <Story />;
};
