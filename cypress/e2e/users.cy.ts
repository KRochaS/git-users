// import { Users } from '../../src/app/models/users';

describe('Users List', () => {
    // it('Should be able to see users information from API', () => {
    //     cy.intercept('GET', 'https://api.github.com/users?per_page=20&page=1').as('users');

    //     cy.visit('http://localhost:4200/');

    //     cy.wait('@users').then((interception) => {

    //         expect(interception.response?.statusCode).to.eq(200);

    //         const users = interception.response?.body;

    //         if (users && users.length > 0) {
    //             users.forEach((user: Users) => {
    //                 expect(user.login).to.exist;
    //             });
    //         } else {
    //             cy.log('Nenhum usuário retornado pela API.');
    //         }

    //     });
    // });

    it('Should be able to view a users information', () => {
        cy.visit(' http://localhost:4200/');
        cy.get('git-users-card-list').should('have.length', 20);
    });

    it('Should be able to scroll the page and see additional 20 users.', () => {
        cy.visit(' http://localhost:4200/');
        cy.scrollTo('bottom');
        cy.get('git-users-card-list').should('have.length', 40);
    });
})