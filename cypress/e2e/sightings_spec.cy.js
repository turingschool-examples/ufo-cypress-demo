// import sightings from '../fixtures/sightings.json';

describe('Sightings page', () => {
  beforeEach(() => {
      cy.intercept('http://localhost:3001/sightings', [
      {"id": 1,"location": "Stevensville, MI", "description": "Giant flying pizza"},
      {"id": 2, "location": "Gurnee, IL", "description": "Giant flying pie"},
      {"id": 3, "location": "Cedar Rapids, IA", "description": "Giant flying pancake"}
    ])
      cy.visit('http://localhost:3000/')
  })

  it('should render the header', () => {
    cy.contains('👁 SkyWatcher 👁');
  })

  it('should render the nav bar', () => {
    cy.get('nav')
      .contains('Sightings')
    cy.get('nav')
      .contains('Report a new sighting')
  })

  it('should render a list of existing sightings', () => {
    cy.get('.sightings')
      .contains('Stevensville, MI')
    cy.get('.sightings')
      .contains('Giant flying pizza')
    cy.get('.sightings')
      .contains('Giant flying pie')
    cy.get('.sightings')
      .contains('Giant flying pancake')
  })
})

describe('Navigation', () => {
  it('should be able to click on the links and see the URL update', () => {
    cy.contains('Report a new sighting').click()
    cy.url('/report')

    cy.contains('Sightings').click()
    cy.url('http://localhost:3000/')
  })
})

describe('Reporting a new sighting', () => {
  it('should render a new sighting on the main page when filled out properly', () => {
    cy.intercept('POST', 'http://localhost:3001/sightings', {"id": 4, "location": 'Spokane, WA', "description": 'Saucer shape moving slowly over ground'});

    cy.intercept('http://localhost:3001/sightings', [
      {"id": 1,"location": "Stevensville, MI", "description": "Giant flying pizza"},
      {"id": 2, "location": "Gurnee, IL", "description": "Giant flying pie"},
      {"id": 3, "location": "Cedar Rapids, IA", "description": "Giant flying pancake"},
      {"id": 4, "location": 'Spokane, WA', "description": 'Saucer shape moving slowly over ground'}
    ])

    cy.visit('http://localhost:3000/report')
    cy.get('form').get('input[type="text"]').type('Spokane, WA')
    cy.get('form').get('textarea').type('Saucer shape moving slowly over ground')
    cy.get('form').get('input[type="submit"]').click();

    cy.url('http://localhost:3000/')
    cy.get('.sightings').contains('Spokane, WA')
    cy.get('.sightings').contains('Saucer shape moving slowly over ground')
  })
})