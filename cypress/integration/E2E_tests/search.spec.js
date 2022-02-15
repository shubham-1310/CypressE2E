describe('Searchbox test', () => {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/index.html")

    })

    it('Should type into search box and submit with pressing enter', () => {
        cy.get('#searchTerm').type('some text{enter}')


    })
    it('Should show search result page', () => {
        cy.contains('Search Results')

    })
})