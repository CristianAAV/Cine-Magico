describe('User navigate to create scenario 7', () => {
  context('Given user in Review Create', () => {
    context('When user fill all form', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.get('a[routerlink="/reviews/create"]').click();
        cy.wait(2000)
        cy.get('#movie').select(0)
        cy.get('#text').type("Any review")
        cy.get('#creator').type("Any creator")
        cy.get('.custom-button-ok').click()
        cy.wait(3000)
      });
      it('Then user sees confirmation message', () => {
        cy.get("div[aria-label='Confirmation']").should('exist')
      });
    });
  });
});
