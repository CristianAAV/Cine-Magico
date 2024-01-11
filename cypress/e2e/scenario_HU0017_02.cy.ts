describe('The user navigate through associate a actor to an movie HU017', () => {
  context('Given user associate a actor to an movie', () => {
    context('When user select a actor and an movie form the form', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.get('a[routerlink="/movies/associate"]').click({ force: true });
        cy.wait(2000)
      });
      it('Then user sees Mensaje title', () => {
        cy.get(".font-weight-bold.title").contains(/Asociar un actor a una pelicula|Associate an actor to a movie/).should('exist')
        cy.get(".form-title-movie").contains(/Selecciona una pelicula|Select Movie/).should('exist')
        cy.get(".form-title-actor").contains(/Selecciona un actor|Select Actor/).should('exist')
      });
    });
  });
});