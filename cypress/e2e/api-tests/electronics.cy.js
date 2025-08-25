describe("Electronics API Test", () => {
  it("Should find electronics products with rate > 4", () => {
        
    // Call the api
    cy.request("https://fakestoreapi.com/products")
        .then(({ status, body }) => {
            expect(status).to.equal(200);
            expect(body).to.be.an("array");

            // Read the response, find all objects with property “electronics”
            const elecProds = body.filter((p) => p.category === "electronics");

            // Compare the response if the objects have the select property
            expect(elecProds.every((p) => p.category === "electronics")).to.be.true;

            // Count how many electronics products were found 
            cy.log(`Total electronics products: ${elecProds.length}`)
    
            // Verify the number of objects with the property above appears with rate bigger than 4      
            const highRatedProds = elecProds.filter(p => p.rating?.rate > 4)
            expect(highRatedProds.every(p => p.rating && p.rating.rate > 4)).to.be.true;            
            
            //Finally print found objects to console
            cy.log(`High-rated electronics products bigger than 4: ${highRatedProds.length}`)
            expect(highRatedProds.length).to.be.greaterThan(0)
            
        });
  });
});
