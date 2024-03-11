import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import Counter from './Counter';

describe('Counter', () => {
    beforeEach(() => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    });

    test('render', () => {
        expect(screen.getByTestId('value-title')).toBeInTheDocument();
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', async () => {
        const incrementBtn = screen.getByTestId('increment-btn');

        await userEvent.click(incrementBtn);

        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', async () => {
        const decrementBtn = screen.getByTestId('decrement-btn');

        await userEvent.click(decrementBtn);

        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
