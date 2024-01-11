describe('User navigate to create movies HU014', () => {
  context('Given user in Movies Create', () => {
    context('When user fill all form with bad values', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.contains(/Peliculas|Movies/).click();
        cy.get('a[routerlink="/movies/create"]').click({force: true});
        cy.wait(2000)
        cy.get('#title').type("M")
        cy.get('#poster').click()
        cy.get('#duration').click()
        cy.get('#country').type("M")
        cy.get('#popularity').click()
        cy.get('h2').click()
        cy.wait(2000)
      });
      it('Then user sees error message', () => {
        cy.get('#title').next().should('have.class', 'alert')
        cy.get('#poster').next().should('have.class', 'alert')
        cy.get('#duration').next().should('have.class', 'alert')
        cy.get('#country').next().should('have.class', 'alert')
        cy.get('#popularity').next().should('have.class', 'alert')
      });
    });
  });
});
