describe('Report form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/report')
  })

  it('should render a text input, a textarea, and a submit input', () => {
    cy.get('form').get('input[type="text"]')
    cy.get('form').get('textarea')
    cy.get('form').get('input[type="submit"]')
  })

  it('should be able to fill out the Report form and see the input values update', () => {
    cy.get('form').get('input[type="text"]').type('Spokane, WA')
    cy.get('form').get('input[type="text"]').should('have.value', 'Spokane, WA')
    cy.get('form').get('textarea').type('Saucer shape moving slowly over ground')
    cy.get('form').get('textarea').should('have.value', 'Saucer shape moving slowly over ground')
  })

  it('should be able to display an error when the user does not fill out whole form', () => {
    cy.intercept('POST', 'http://localhost:3001/sightings', {message: 'Body is missing a required parameter of location'})
    cy.visit('http://localhost:3000/report')
    cy.get('form').get('textarea').type('Saucer shape moving slowly over ground')
    cy.get('input[type="submit"]').click()
    cy.contains('Body is missing a required parameter of location')
  })
})