describe('User navigate to movies detail HU008 ', () => {
  context('Given user in Movies List', () => {
    context('When user list movies and click first movies', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.contains(/Peliculas|Movies/).click();
        cy.get('a[routerlink="/movies/list"]').click({force: true});
        cy.wait(2000)
        cy.get('.card.p-2.px-4-sm').eq(0).find('h5').click()
        cy.wait(2000)
      });
      it('Then user sees movies detail list', () => {
        cy.get('a[routerlink="/movies/list"]').should('exist');
      });
    });
  });
});
