import shopPage from '../pageobjects/ShopPage'
import cartPage from '../pageobjects/CartPage'

describe('Cart checkout validation', function () {
let items;

    beforeEach(() => {

        // Load items data in and assign to items variable
        cy.fixture('items').then((fixtureItems) => {
            items = fixtureItems.items;
        });
        cy.visit('/')
    })


    it('Calculates correct totals for cart items', () => {

        shopPage.goToShopPage();

        // Loop through items array and buy items based off the data passed
        items.forEach(item => {
            shopPage.buyItem(item.quantityToBuy, item.name);
        });

        cartPage.goToCartPage();

        // Loop through items array and validate subtotal of items based off the data passed
        items.forEach(item => {
            const expectedSubtotal = `$${(item.price * item.quantityToBuy).toFixed(2)}`;
            cartPage.itemSubTotal(item.name).should('have.text', expectedSubtotal);
        });

        // Loop through items array and validate price of items based off the data passed
        items.forEach(item => {
            const expectedPrice = `$${item.price}`;
            cartPage.itemPrice(item.name).should('have.text', expectedPrice);
        });


        // Calculate and validate total
        let expectedTotal = 0;
        items.forEach(item => {
            expectedTotal += item.price * item.quantityToBuy;
        });
        cartPage.cartTotalText.should('include','Total: ')
        cartPage.cartTotal().then((actualTotal) => {
            actualTotal = parseFloat(actualTotal);  // Convert the string to a number
            expect(actualTotal).to.eq(expectedTotal);
        });

    })

})