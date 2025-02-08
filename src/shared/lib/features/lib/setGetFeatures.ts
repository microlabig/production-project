import { LAST_DESIGN_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { FeaturesFlags } from '@/shared/types/features';

const defaultFeatures: FeaturesFlags = {
    isAppRedesigned: localStorage.getItem(LAST_DESIGN_LOCAL_STORAGE_KEY) === 'new',
};

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ, ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
let featureFlags: FeaturesFlags = defaultFeatures;

export function setFeatureFlags(newFeatureFlags?: FeaturesFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeaturesFlags) {
    return featureFlags?.[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}
