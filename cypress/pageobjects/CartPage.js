class CartPage {

    goToCartPage() {
        cy.get('#nav-cart > a').click();
    }

    get cartTotalText(){
        return cy.get('.total').invoke('text'); // Get the text from the element
    }

    cartTotal() {
        return this.cartTotalText.then((totalText) => {
                return totalText.replace('Total: ', '');  // Remove 'Total: ' and return the numeric value
            });
    }

    itemSubTotal(itemName) {
        return cy.contains(itemName)
            .parents('tr')
            .find('td')
            .eq(3)
    }

    itemPrice(itemName) {
        return cy.contains(itemName)
            .parents('tr')
            .find('td')
            .eq(1)
    }
}

module.exports = new CartPage();