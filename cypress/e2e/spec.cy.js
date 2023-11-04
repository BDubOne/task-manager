describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  cy.visit('/'); // Replace with your app's URL
  cy.get('h1').should('contain', 'Vite + React'); 
})