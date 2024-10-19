import shopPage from '../pageobjects/ShopPage'
import cartPage from '../pageobjects/CartPage'

describe('Cart checkout validation', function () {
let cartItems; // Holds array for items to buy

    beforeEach(() => {

        // Load items data in and assign to items variable
        cy.fixture('items').then((itemsData) => {
            cartItems = itemsData.items;
        });
        cy.visit('/')
    })


    it('Calculates correct totals for cart items', () => {

        shopPage.goToShopPage();

        // Loop through items array and buy items based off the data passed
        cartItems.forEach(item => {
            shopPage.buyItem(item.quantityToBuy, item.name);
        });

        cartPage.goToCartPage();

        // Loop through items array and validate subtotal of items based off the data passed
        cartItems.forEach(item => {
            const expectedSubtotal = `$${(item.price * item.quantityToBuy)}`;
            cartPage.itemSubTotal(item.name).should('equal', `${expectedSubtotal}`);
        });

        // Loop through items array and validate price of items based off the data passed
        cartItems.forEach(item => {
            const expectedPrice = `$${item.price}`;
            cartPage.itemPrice(item.name).should('equal', `${expectedPrice}`);
        });


        // Calculate and validate total
        let expectedTotal = 0;
        cartItems.forEach(item => {
            expectedTotal += item.price * item.quantityToBuy;
        });
        cartPage.cartTotalText.should('include','Total: ')
        cartPage.cartTotal.should('equal', `${expectedTotal}`);
    })

})