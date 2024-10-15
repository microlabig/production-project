import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

function Counter() {
    const { t } = useTranslation();

    const { add, decrement, increment } = useCounterActions();

    const value = useCounterValue();

    const handleAddFive = () => {
        add(5);
    };
    const handleIncrement = () => {
        increment();
    };
    const handleDecrement = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>

            <Button onClick={handleAddFive}>+5</Button>
            <Button data-testid="increment-btn" onClick={handleIncrement}>
                {t('increment')}
            </Button>
            <Button data-testid="decrement-btn" onClick={handleDecrement}>
                {t('decrement')}
            </Button>
        </div>
    );
}

export default Counter;
