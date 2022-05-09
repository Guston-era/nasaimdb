beforeEach(() => {
  // we include it in our beforeEach function so that it runs before each test
  cy.visit('/')
})

describe('Home page rendering', () => {
  // it can see the homewrapper
  it('page renders correctly', () => {
    cy.get('[data-test-id=homewrapper]').should('exist')
  })
  // the top section exists
  it('top section div renders correctly', () => {
    cy.get('[data-test-id=topdiv]').should('exist')
  })

  // h1 exists
  it('h1 in top section renders correctly', () => {
    cy.get('[data-test-id=toptext]').should('exist')
  })

  // image exists
  it('imagfe in top section renders correctly', () => {
    cy.get('[data-test-id=topimage]').should('exist')
  })
})
