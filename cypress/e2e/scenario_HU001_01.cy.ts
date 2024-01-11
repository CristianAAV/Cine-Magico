describe('The user navigate through actors list', () => {
  context('Given user in actors List', () => {
    context('When user click in actors list', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.contains("Actors").click();
        cy.get('a[routerlink="/actors/list"]').click({force: true});
        cy.wait(3000)
      });
      it('Then the user sees actors title', () => {
        cy.get('h2').should('contain',"ACTORS")
      });
      it('Then user sees filter fields', () => {
        cy.get("input[aria-label='Campo buscar actor']").should('exist')
        cy.get("select[aria-label='Ordenar']").should('exist')
        cy.get("option[value='option1']").should('exist')
        cy.get("option[value='option2']").should('exist')
        cy.get("option[value='option3']").should('exist')
      })
    });
  });
});
