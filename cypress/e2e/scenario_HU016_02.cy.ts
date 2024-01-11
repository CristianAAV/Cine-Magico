describe('User navigate to create scenario 8', () => {
  context('Given user in Review Create', () => {
    context('When user fill bad values in form', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.get('a[routerlink="/reviews/create"]').click();
        cy.wait(2000)
        cy.get('#text').type("A")
        cy.get('#creator').type("A")
        cy.wait(2000)
      });
      it('Then user sees error message', () => {
        cy.get('#text').next().should('have.class', 'alert')
        cy.get('#creator').next().should('have.class', 'alert')
      });
    });
  });
});
