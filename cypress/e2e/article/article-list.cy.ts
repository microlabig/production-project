const filterTab = 'Айти';

describe('Пользователь заходит на страницу статей', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then(() => {
            cy.visit(`articles`);
        });
    });

    it('И статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.gte', 1);
    });

    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.gte', 1);
    });

    it(`И статьи фильтруются по ${filterTab}`, () => {
        cy.getByTestId('ArticleTypeTabs').should('exist');
        cy.getByTestId(`ArticleTypeTabs.Tab.${filterTab}`).should('be.visible').click();
        cy.getByTestId('ArticleListItem').should('have.length.gte', 0);
    });
});
