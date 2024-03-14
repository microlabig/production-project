import { User } from '../../../src/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/constants/localStorage';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (username = 'test', password = '123') => {
    cy.log(`Logging in as ${username}`);

    return cy
        .request({
            method: 'POST',
            url: `http://localhost:8000/login`,
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
            return body;
        });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;
            getByTestId(testId: string): ReturnType<typeof cy.get>;
        }
    }
}
