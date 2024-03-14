import { EditableProfileCard } from '@/features/EditableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

describe('EditableProfileCard.cy.tsx', () => {
    it('mount', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: '1',
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id="1" />
            </TestProvider>
        );
    });
});
