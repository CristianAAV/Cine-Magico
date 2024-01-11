describe('User navigate to director detail scenario 4', () => {
  context('Given user in Directors List', () => {
    context('When user list directors and click first director and click movie details', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.contains("Director").click();
        cy.get('a[routerlink="/directors/list"]').click({force: true});
        cy.wait(2000)
        cy.get('.card.p-2.px-4-sm').eq(0).find('h5').click()
        cy.wait(2000)
        cy.get('.card-details').first().click()
        cy.wait(2000)
      });
      it('Then user sees movie detail', () => {
        cy.get('a[routerlink="/movies/list"]').should('exist');
      });
    });
  });
});
