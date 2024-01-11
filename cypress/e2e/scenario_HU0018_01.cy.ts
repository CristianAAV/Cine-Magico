describe('The user navigate through associate a movie to an actor', () => {
  context('Given user associate a movie to an actor', () => {
    context('When user select a movie and an actor form the form', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.get('a[routerlink="/actors/associate"]').click({ force: true });
        cy.wait(2000)
        cy.get('#movieid').select(0)
        cy.get('#actorid').select(0)
        cy.wait(2000)
        cy.get('.custom-button-ok').click()
        cy.wait(2000)
      });
      it('Then user sees confirmation message', () => {
        cy.get("div[aria-label='Confirmation']").should('exist')
      });
    });
  });
});