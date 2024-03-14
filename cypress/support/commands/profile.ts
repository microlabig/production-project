export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.FirstName').clear().type(firstName);
    cy.getByTestId('ProfileCard.LastName').clear().type(lastName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {
            authorization: 'asdf',
        },
        body: {
            first: 'test',
            lastname: '2',
            age: 20,
            currency: 'EUR',
            country: 'Belarus',
            city: '',
            username: 'test',
            avatar: 'https://placehold.co/24x24',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
