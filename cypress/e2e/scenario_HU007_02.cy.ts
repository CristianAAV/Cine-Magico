describe('The user navigate through movies list HU007', () => {
  context('Given user in movies List', () => {
    context('When user click in movies list', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.contains(/Peliculas|Movies/).click();
        cy.get('a[routerlink="/movies/list"]').click({force: true});
        cy.wait(3000)
      });
      it('Then the user sees movies breadcrumb', () => {
        cy.contains('.active', /Peliculas|Movies/).should('exist').and('be.visible');
        cy.contains('.breadcrumb > :nth-child(1) > a', /Inicio|Home/).should('exist').and('be.visible');
      });
      it('Then user sees filter fields', () => {
        cy.get(":nth-child(1) > .card > .card-body > .card-title").should('exist')
        cy.get(":nth-child(1) > .card > .card-body > .card-details").should('exist')
      })
    });
  });
});
