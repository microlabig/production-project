let articleId = '';
// const commentId = '';

describe('Пользователь заходит на страницу отдельной статьи', () => {
    describe('работа с API', () => {
        beforeEach(() => {
            cy.login();
            cy.createArticle().then(article => {
                articleId = article.id;

                cy.log(JSON.stringify(article));

                cy.visit(`articles/${articleId}`);
            });
        });

        afterEach(() => {
            cy.removeArticle(articleId);
        });

        it('И статья успешно подгружается', () => {
            cy.getByTestId('ArticleDetails').should('exist');
        });

        it('И успешно подгружается список рекомендаций', () => {
            cy.getByTestId('ArticleRecommendationsList').should('exist');
        });

        it('И оставляет комментарий', () => {
            // cy.intercept('POST', '*comments').as('createComment');

            cy.getByTestId('ArticleDetails.Info').should('exist');
            cy.getByTestId('AddCommentForm').scrollIntoView();

            cy.addComment('text');
            // cy.wait('@createComment').then(({ response }) => {
            //     commentId = response?.body?.id ?? '';
            // });

            cy.getByTestId('CommentCard.Content').should('have.length', 1);
            // .then(() => {
            //     cy.removeComment(commentId);
            // });
        });

        it('И ставит оценку', () => {
            const rateStars = 5;

            cy.getByTestId('ArticleDetails.Info').should('exist');
            cy.getByTestId('RatingCard').scrollIntoView();

            cy.setRate(rateStars, 'feedback');

            cy.get('[data-selected=true]').should('have.length', rateStars);
        });
    });

    describe('работа без API (на стабах/фикстурах)', () => {
        beforeEach(() => {
            cy.login();
            cy.visit(`articles/1`); // см. ID статьи из фикстуры
        });

        it('И ставит оценку', () => {
            const rateStars = 5;

            cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
            cy.intercept('GET', '**/article-ratings?*', { fixture: 'article-ratings.json' });

            cy.getByTestId('ArticleDetails.Info').should('exist');
            cy.getByTestId('RatingCard').scrollIntoView();

            cy.setRate(rateStars, 'feedback');

            cy.get('[data-selected=true]').should('have.length', rateStars);
        });
    });
});
