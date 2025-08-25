export class InventoryPage{
  getSortDropdown(){
    return cy.get('[data-test="product-sort-container"]')
  }

  getProductNames(){
    return cy.get('.inventory_item_name')
  }

  verifyProductOrder(order = 'asc'){
    this.getProductNames().then($els => {
      const items = [...$els].map(el => el.innerText.trim())
      const sorted = order === 'asc'? [...items].sort() : [...items].sort().reverse()
      expect(items).to.deep.eq(sorted);
    });
  }

  sortProducts(order){
    this.getSortDropdown().select(order);
  }
}