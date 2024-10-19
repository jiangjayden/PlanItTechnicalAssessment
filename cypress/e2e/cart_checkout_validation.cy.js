import shopPage from '../pageobjects/ShopPage'
import cartPage from '../pageobjects/CartPage'

describe('Cart checkout validation', function () {

    beforeEach(() => {
        // cy.setViewportToFullScreen();
        cy.visit('/')
    })


    it('Calculates correct totals for cart items', () => {
        const stuffedFrog = 'Stuffed Frog';
        const fluffyBunny = 'Fluffy Bunny';
        const valentineBear = 'Valentine Bear';

        const stuffedFrogPrice = '$10.99'
        const fluffyBunnyPrice = '$9.99'
        const valentineBearPrice = '$14.9'

        const stuffedFrogSubTotal = '$21.98'
        const fluffyBunnySubTotal = '$49.95'
        const valentineBearSubTotal = '$44.97'



        const subTotals = [stuffedFrogSubTotal, fluffyBunnySubTotal, valentineBearSubTotal];

        shopPage.goToShopPage();
        shopPage.buyItem(2, stuffedFrog);
        shopPage.buyItem(5, fluffyBunny);
        shopPage.buyItem(3, valentineBear);

        cartPage.goToCartPage();

        // Validate subTotal for each product
        cartPage.itemSubTotal(stuffedFrog).should('have.text', stuffedFrogSubTotal);
        cartPage.itemSubTotal(fluffyBunny).should('have.text', fluffyBunnySubTotal);
        cartPage.itemSubTotal(valentineBear).should('have.text', valentineBearSubTotal);

        // Validate price for each product
        cartPage.itemPrice(stuffedFrog).should('have.text', stuffedFrogPrice);
        cartPage.itemPrice(fluffyBunny).should('have.text', fluffyBunnyPrice);
        cartPage.itemPrice(valentineBear).should('have.text', valentineBearPrice);

        // validate total
        cartPage.cartTotal().then((actualTotal) => {
            const expectedTotal = cartPage.calculateCartTotal(subTotals);
            expect(actualTotal).to.eq(expectedTotal);
        });
    })

})