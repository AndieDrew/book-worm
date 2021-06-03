describe('BookshelfDisplay', () => {
  beforeEach( () => {
    cy.load()
    cy.bookshelf()
  })

  it('Should display the navbar', () => {
    cy.get('.nav').should('be.visible')
      .get('nav > h1').should('contain', 'BookWorm')
      .get('nav > ul > a').eq(0).should('contain', 'Home')
      .get('nav > ul > a').should('contain', 'Favorites')
  })

  it('Should display bookcards based on a genre', () => {
    cy.get('.bookshelf').should('be.visible')
      .get('.bookCard').should('have.length', 2)
      .get('.bookshelf > article').eq(0).should('contain', 'THE LAST THING HE TOLD ME')
        .should('contain', 'Laura Dave')
        .should('contain', 'Rank: 1')
        .should('contain', 'Add to Favorites 🐛')
      .get('.bookshelf > article').eq(1).should('contain', 'SOOLEY')
        .should('contain', 'John Grisham')
        .should('contain', 'Rank: 2')
        .should('contain', 'Add to Favorites 🐛')
  })

  it('Should include the queryName in the URL', () => {
     cy.url().should('eq', 'http://localhost:3000/bookshelf/combined-print-and-e-book-fiction')
  })

  it('Should display an error message if the fetch call returns an error', () => {
    
  })

  it('Should display an error message if the URL is not found', () => {
    cy.visit('http://localhost:3000/bookshelf/not-a-real-genre-type')
      .get('.noMatchError').should('contain', 'Sorry, page not found!')
      .get('button').should('contain', 'GO TO HOMEPAGE')
  })

  it('Should redirect a user to the homepage when the button on the error page is clicked', () => {
    cy.visit('http://localhost:3000/bookshelf/not-a-real-genre-type')
      .get('button').click()
      .url().should('eq', 'http://localhost:3000/')
      .get('.listTitle > h2').should('contain', 'Current Best Sellers')
      .get('.listTitle > h4').should('contain', 'Courtesy of The New York Times')
      .get('.list-container').should('be.visible')
  })

})
