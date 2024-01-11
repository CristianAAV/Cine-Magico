describe('The user navigate through associate a actor to an movie HU017', () => {
  context('Given user associate a actor to an movie', () => {
    context('When user select a actor and an movie form the form', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.get('a[routerlink="/movies/associate"]').click({ force: true });
        cy.wait(2000)
        cy.get('#movieid').select(0)
        cy.get('#actorid').select(0)
        cy.wait(2000)
        cy.get('.custom-button-primary').click({ force: true })
        cy.wait(2000)
      });
      it('Then user sees confirmation message', () => {
        cy.get("div[aria-label='Confirmation']").should('exist')
      });
    });
  });
});