let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then(data => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.FirstName').should('have.value', 'test');
    });

    it('И редакутирует его', () => {
        const firstName = 'new';
        const lastName = 'lastname';

        cy.updateProfile(firstName, lastName);
        cy.getByTestId('ProfileCard.FirstName').should('have.value', firstName);
        cy.getByTestId('ProfileCard.LastName').should('have.value', lastName);
        cy.getByTestId('EditableProfileCardHeader.EditButton').should('be.visible');
    });
});
