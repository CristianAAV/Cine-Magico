describe('User navigate to create movie HU0014', () => {
  context('Given user in Movies Create', () => {
    context('When user fill all form', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.contains(/Peliculas|Movies/).click();
        cy.get('a[routerlink="/movies/create"]').click({force: true});
        cy.wait(2000)
        cy.get('#title').type("Movies title")
        cy.get('#poster').type("http://dummyimage.com/107x100.png/ff4444/ffffff");
        cy.get('#duration').type("120");
        cy.get('#country').type("Colombia");
        cy.get('#releaseDate').type("2000-11-11")
        cy.get('#popularity').type("5");
        cy.wait(1000)
        cy.get('button.custom-button-ok').click({ force: true });
        cy.wait(2000)
      });
      it('Then user sees confirmation message', () => {
        cy.get("div[aria-label='Confirmation']").should('exist')
      });
    });
  });
});
