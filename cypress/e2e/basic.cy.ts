it('google test', function() {

    cy.visit('example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn btn btn-primary')
        .should('be.visible')
    cy.get('#query-btn').invoke('attr','id')
        .should('equal','query-btn')
    
})