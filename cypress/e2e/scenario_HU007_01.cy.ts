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
      it('Then the user sees movies title', () => {
        cy.contains('h2.font-weight-bold.title', /Peliculas|Movies/).should('exist').and('be.visible');
      });
      it('Then user sees filter fields', () => {
        cy.get("input[aria-label='Search movies']").should('exist')
        cy.get("select[aria-label='Ordenar']").should('exist')
        cy.get("option[value='option1']").should('exist')
        cy.get("option[value='option2']").should('exist')
      })
    });
  });
});
