import { ReactElement } from 'react';

import { FeaturesFlags } from '@/shared/types/features';
import { getFeatureFlag } from '../../lib/setGetFeatures';

interface ToggleFeaturesProps {
    feature: keyof FeaturesFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { on, off, feature } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};
