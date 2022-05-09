beforeEach(() => {
  // we include it in our beforeEach function so that it runs before each test
  cy.visit('/')
})
// rendering
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

  // 20 movie wrappers will load
  it('20 wrapper divs exist', () => {
    cy.get('[data-test-id=bottomdiv]')
      .find('[data-test-id=moviewrapper]')
      .should('have.length', 20)
  })
  // each movie wrapper has a link inside it
  it('each movie wrapper has a link inside it', () => {
    cy.get('[data-test-id=moviewrapper]').each(() => {
      cy.get('[data-test-id=wrapperlink]').should('exist')
    })
  })

  // each link contains an image background
  it('each link contains an image background', () => {
    cy.get('[data-test-id=moviewrapper]').each(() => {
      //   cy.get('[data-test-id=wrapperlink]').each(() => {
      cy.get('[data-test-id=wrapperfloat]').should('exist')
      //   })
    })
  })

  // each link  has title
  it('each link contains a title', () => {
    cy.get('[data-test-id=moviewrapper]').each(() => {
      //   cy.get('[data-test-id=wrapperlink]').each(() => {
      cy.get('[data-test-id=wrappertitle]').should('exist')
      //   })
    })
  })

  // description
  it('each link contains a description', () => {
    cy.get('[data-test-id=moviewrapper]').each(() => {
      cy.get('[data-test-id=wrapperlink]')
        .find('[data-test-id=wrapperdescription]')
        .should('exist')
    })
  })

  // popularity
  it('each link contains the popularity section', () => {
    cy.get('[data-test-id=moviewrapper]').each(() => {
      cy.get('[data-test-id=wrapperlink]')
        .find('[data-test-id=wrapperpopularity]')
        .should('exist')
    })
  })

  // release date
  it('each link contains release date', () => {
    cy.get('[data-test-id=moviewrapper]').each(() => {
      cy.get('[data-test-id=wrapperlink]')
        .find('[data-test-id=wrapperreleasedate]')
        .should('exist')
    })
  })
})
// functionality
// describe('Clicking on a movie', () => {
//      it('Can View movie details', () => {

//     cy.get('[data-test-id=moviewrapper]')
//       .first()
//       .click()
//       .then(() => {
//         cy.get('.add_sub_task').first().type(`${subTask}`)
//         cy.get('.add_sub_task_button').first().click()
//         cy.get('.subtask').first().should('have.length.greaterThan', 0)
//       })
//   })
// })
