describe('User navigate to create scenario 6', () => {
  context('Given user in Directors Create', () => {
    context('When user fill all form with bad values', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.contains("Director").click();
        cy.get('a[routerlink="/directors/create"]').click({force: true});
        cy.wait(2000)
        cy.get('#name').type("D")
        cy.get('#nationality').type(Array(102).join('x'))
        cy.get('#biography').type(Array(102).join('x'))
        cy.get('#birthDate').click()
        cy.get('h2').click()
        cy.wait(2000)
      });
      it('Then user sees error message', () => {
        cy.get('#name').next().should('have.class', 'alert')
        cy.get('#nationality').next().should('have.class', 'alert')
        cy.get('#biography').next().should('have.class', 'alert')
      });
    });
  });
});
