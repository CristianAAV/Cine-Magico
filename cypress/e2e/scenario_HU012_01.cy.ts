describe('User navigate to create scenario 5', () => {
  context('Given user in Directors Create', () => {
    context('When user fill all form', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.contains("Director").click();
        cy.get('a[routerlink="/directors/create"]').click({force: true});
        cy.wait(2000)
        cy.get('#name').type("Director name")
        cy.get('#photo').type("https://this-person-does-not-exist.com/en/download-page?image=gen114092c17e0a0b9105e8d54058e5c736")
        cy.get('#nationality').type("Colombian")
        cy.get('#birthDate').type("1990-10-11")
        cy.get('#biography').type("1990-10-11")
        cy.get('.custom-button-ok').click()
        cy.wait(2000)
      });
      it('Then user sees confirmation message', () => {
        cy.get("div[aria-label='Confirmation']").should('exist')
      });
    });
  });
});
