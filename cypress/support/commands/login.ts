import { USER_LOCAL_STORAGE_KEY } from "../../../src/shared/constants/localStorage";

export const login = (username = 'test', password = '123') => {
    cy.log(`Logging in as ${username}`);

    cy.request({
        method: 'POST',
        url: `http://localhost:8000/login`,
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
    });
}