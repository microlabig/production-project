import { FeaturesFlags } from '@/shared/types/features';

import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeatures<T> {
    name: keyof FeaturesFlags;
    on: () => T;
    off: () => T;
}

// функция указания того, какую фичу `name` использовать (on, off)
export function toggleFeatures<T>({ name, on, off }: ToggleFeatures<T>) {
    if (getFeatureFlag(name)) {
        return on();
    }
    return off();
}
