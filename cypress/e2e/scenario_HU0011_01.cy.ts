describe('The user navigate through create actor', () => {
  context('Given user access in create actor', () => {
    context('When user fills out the entire form', () => {
      beforeEach(() => {
        cy.visit('http://localhost:4200/');
        cy.contains('Actor').click();
        cy.get('a[routerlink="/actors/create"]').click({ force: true });

        cy.get('#name').type('Nombre del Actor');
        cy.get('#photo').type('https://this-person-does-not-exist.com/en/download-page?image=gen114092c17e0a0b9105e8d54058e5c736');
        cy.get('#nationality').type('USA');
        cy.get('#birthDate').type('1983-03-23');
        cy.get('#biography').type(' xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

        cy.get('.custom-button-ok').click();
        cy.wait(2000)
      });

      it('Entonces el usuario ve un mensaje de confirmación', () => {
        cy.log('Antes de encontrar el elemento de confirmación');
        cy.get("div[aria-label='Confirmation']").should('exist');
      });
    });
  });
});