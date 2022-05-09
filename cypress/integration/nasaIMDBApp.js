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
  it('image in top section renders correctly', () => {
    cy.get('[data-test-id=topimage]').should('exist')
  })

  // bottom div exists
  it('the bottom section renders correctly', () => {
    cy.get('[data-test-id=bottomdiv]').should('exist')
  })
    
  // movie wrapper exists
    it('There is atleast one movie wrapper in the bottom section', () => {
    cy.get('[data-test-id=moviewrapper]').should('exist')
  })
  // each movie wrapper has a link inside it
  it('each movie wrapper has a link inside it', () => {
    cy.get('[data-test-id=moviewrapper]').each(() => {
      cy.get('[data-test-id=wrapperlink]').should('exist')
    })
  })
})
