describe('The user navigate through actors details', () => {
  context('Given user in actors List', () => {
    context('When user clicks in actors details first actor', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/')
        cy.wait(1)
        cy.contains("Actors").click();
        cy.get('a[routerlink="/actors/list"]').click({force: true});
        cy.wait(2000)
        cy.get('.card.p-2.px-4-sm').eq(0).find('h5').click()
        cy.wait(2000)
      });
      it('Then user sees director detail list', () => {
        cy.get('a[routerlink="/actors/list"]').should('exist');
      });
      it('Then user sees emptly list', () => {
        cy.get("option[value='option1']").should('not.exist');
        cy.get("option[value='option2']").should('not.exist');
        cy.get("option[value='option3']").should('not.exist');
      });
    });
  });
});