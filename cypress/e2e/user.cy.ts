describe('Search Functionality', () => {
    it('Should be able to search for and view user information', () => {
        cy.visit(' http://localhost:4200/');
        cy.get('input[type="search"]').type('krochas');
        cy.get('input[type="search"]').should('have.value', 'krochas');
        cy.get('#card').should('exist');
        cy.get('#card h1:first').should('contain', 'Karine Rocha');
    });



    // it('Should display a Not Found message when no user is found', () => {
    //     cy.wait(5000);
    //     cy.visit(' http://localhost:4200/');
    //     cy.get('input[type="search"]').type('asdfghjkk');
    //     cy.get('input[type="search"]').should('have.value', 'asdfghjkk');
    //     cy.get('git-users-not-found').should('exist');
    //     cy.get('git-users-not-found h1:first').should('contain', 'Usuário não encontrado!');
    // });
})

