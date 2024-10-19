class CartPage {

    goToCartPage() {
        cy.get('#nav-cart > a').click();
    }

    // Find cart total element and return text
    get cartTotalText(){
        return cy.get('.total').invoke('text'); // Get the text from the element
    }

    // Find cart total element and return the value only
    get cartTotal() {
        return this.cartTotalText.then((totalText) => {
                return totalText.replace('Total: ', '');  // Remove 'Total: '
            });
    }

    // Find itemSubTotal based off item name
    itemSubTotal(itemName) {
        return cy.contains(itemName)
            .parents('tr')
            .find('td')
            .eq(3).invoke('text')// index 3 is the subTotal column
    }

    // Find itemPrice based off item name
    itemPrice(itemName) {
        return cy.contains(itemName)
            .parents('tr')
            .find('td')
            .eq(1).invoke('text')  // index 1 is the subTotal column
    }
}

module.exports = new CartPage();