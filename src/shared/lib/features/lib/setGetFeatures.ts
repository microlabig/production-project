import { FeaturesFlags } from '@/shared/types/features';

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ, ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
let featureFlags: FeaturesFlags = {};

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
