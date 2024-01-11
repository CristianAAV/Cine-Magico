describe('User navigate to directors list scenario 1', () => {
  context('Given user in Directors List', () => {
    context('When user list directors', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.contains("Director").click();
        cy.get('a[routerlink="/directors/list"]').click({force: true});
        cy.wait(3000)
      });
      it('Then user sees directors title', () => {
        cy.get('h2').should('contain',"DIRECTOR")
      });
      it('Then user sees filter fields', () => {
        cy.get("input[aria-label='Campo diligenciar director']").should('exist')
        cy.get("select[aria-label='Ordenar']").should('exist')
      })
    });
  });
});
