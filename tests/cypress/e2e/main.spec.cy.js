describe('mainTest', () => {
  it('User input and API data retrieval validation. Do all repos have a link?', () => {
    cy.visit('http://localhost:5173');

    cy.get('input').type("trzmlel");
    cy.get('button').click();

    cy.get('.bg-color').each(($el, index, $list) => {
      cy.wrap($el).find('a').should('have.attr', 'href')
    })
  })
})