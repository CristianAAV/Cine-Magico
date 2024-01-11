describe('User navigate to directors list scenario 2', () => {
  context('Given user in Directors List', () => {
    context('When user list directors and search random word', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.contains("Director").click();
        cy.get('a[routerlink="/directors/list"]').click({force: true});
        cy.wait(2000)
        cy.get("input[aria-label='Campo diligenciar director']").type("#randomText")
        cy.get("#button-addon2").click()
        cy.wait(2000)
        
      });
      it('Then user sees emptly list', () => {
        cy.get('.card.p-2.px-4-sm').should('not.exist');
      });
    });
  });
});
