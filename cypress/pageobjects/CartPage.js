class CartPage {

    goToCartPage() {
        cy.get('#nav-cart > a').click();
    }

    cartTotal() {
        return cy.get('.total')              // Get the total element
            .invoke('text')                    // Extract its text
            .then((totalText) => {
                return totalText.replace('Total: ', '').trim();  // Remove 'Total: ' and return the numeric value
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

    calculateCartTotal(subTotals) {
        let total = 0;
        for (let i = 0; i < subTotals.length; i++) {
            total += parseFloat(subTotals[i].replace('$', ''));
        }

        return total.toFixed(1);
    }


}

module.exports = new CartPage();