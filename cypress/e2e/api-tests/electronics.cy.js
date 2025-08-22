describe('Electronics API Test', () => {
    it('Should find electronics produts with rate > 4', () => {
        //1- Call the api
        cy.request('https://fakestoreapi.com/products')
            .then((response) => {
                expect(response.status).to.equal(200)

        //2- Filter the products with category 'electronics'
        const elecprods = response.body.filter(
            (prod) => prod.category === "electronics"
        )

        //3- Filter products with rate > 4
        const highRatedProds = elecprods.filter(
            (prod) => prod.rating && prod.rating.rate > 4
        )

        //4- Count the number of products
        const prodCount = highRatedProds.length
        cy.log(`Number of eletronic products rated > 4: ${prodCount}`)

        //5- Print products to console
        console.log('High-rated electronics products:', highRatedProds)

        //6- Assertion: at least one products should have rate > 4
        expect(prodCount).to.be.greaterThan(0)

        
        cy.log(`Total electronics products: ${elecprods.length}`)
        cy.log(`High-rated electronics products: ${highRatedProds.length}`)
        })
    })
})