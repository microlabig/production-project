import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

function Counter() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const value = useSelector(getCounterValue);

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    };
    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>

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
