import { buildSelector } from '@/shared/lib/store';

export const [useCounterValue, getCounterValue] = buildSelector(state => state.counter.value); // createSelector(getCounter, counter => counter.value);
